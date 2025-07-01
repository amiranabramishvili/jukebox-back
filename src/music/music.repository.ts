import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Music } from "./entities/music.entity";
import { Repository } from "typeorm";
import { CreateMusicDto } from "./dto/create-music.dto";
import { UpdateMusicDto } from "./dto/update-music.dto";

@Injectable()
export class MusicRepository {
    constructor(@InjectRepository(Music) private musicRepository: Repository<Music>) {}

    async findAll() {
        return await this.musicRepository.find()
    }

    async findOne(id: number) {
        return await this.musicRepository.findOneBy({ id });
    }

    async create(createMusicDto: CreateMusicDto) {
        const newMusic = this.musicRepository.create(createMusicDto);
        return await this.musicRepository.save(newMusic);
    }

    async update(id: number, updateMusicDto: UpdateMusicDto) {
        return await this.musicRepository.update(id, updateMusicDto);
    }

    async delete(id: number) {
        await this.musicRepository.softDelete({id});
        return await this.musicRepository.findOne({ where: { id }, withDeleted: true })
    }
}