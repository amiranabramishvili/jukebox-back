import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicRepository } from './music.repository';
import { Music } from './entities/music.entity';



@Injectable()
export class MusicService {
  constructor(private musicRepository: MusicRepository) {}

  async create(data: CreateMusicDto): Promise<Music> {
    return await this.musicRepository.create(data)
  }

  async findAll(): Promise<Music[]> {
    return await this.musicRepository.findAll();
  }

  async findOne(id: number) {
    return await this.musicRepository.findOne(id);
  }

  async update(id: number, updateMusicDto: UpdateMusicDto) {
    return await this.musicRepository.update(id, updateMusicDto);
  }

  async remove(id: number) {
    return await this.musicRepository.delete(id);
  }
}
