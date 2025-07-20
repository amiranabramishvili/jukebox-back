import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Music } from "./entities/music.entity";
import { Repository, ILike } from "typeorm";
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";
import { SearchMusicDto } from "./dto/search-music.dto";

@Injectable()
export class MusicRepository {
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>
  ) {}

  async findAll() {
    return await this.musicRepository.find({
      relations: [
        'album',
        'author',
        'playlists'
      ]
    });
  }

  async findOne(id: number) {
    return await this.musicRepository.findOneBy({ id });
  }

  async create(createMusicDto: CreateMusicDto) {
    const newMusic = this.musicRepository.create(createMusicDto);
    return await this.musicRepository.save(newMusic);
  }

  async update(id: number, updateMusicDto: UpdateMusicDto) {
    await this.musicRepository.update(id, updateMusicDto);
    return await this.findOne(id);
  }

  async delete(id: number) {
    await this.musicRepository.softDelete({ id });
    return await this.musicRepository.findOne({
      where: { id },
      withDeleted: true,
    });
  }
  async search(params: SearchMusicDto): Promise<Music[]> {
    const { name, url } = params;

    const where: any = {};

    if (name) {
      where.name = ILike(`%${name}%`);
    }

    if (url) {
      where.url = ILike(`%${url}%`);
    }

    return await this.musicRepository.find({ where });
  }
}
