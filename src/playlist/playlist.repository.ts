import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Playlist } from "./entities/playlist.entity";
import { Repository } from "typeorm";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { UpdatePlaylistDto } from "./dto/update-playlist.dto";

@Injectable()
export class playlistRepository {
    constructor(
        @InjectRepository(Playlist)
        private playlistRepo: Repository<Playlist>
    ){}

    async create(createPlaylistDto: CreatePlaylistDto){
        const newPlaylist = Object.assign(new Playlist(), createPlaylistDto)
        return await this.playlistRepo.save(newPlaylist)
    }

    async findAll(){
        return await this.playlistRepo.find({
            relations: {
                musics: true,
                user: true
            }
        })
    }

    async findOne(id: number){
        return await this.playlistRepo.findOneBy({id})
    }

    async remove(id: number){
        return await this.playlistRepo.delete(id)
    }

    async update(id: number, data: UpdatePlaylistDto){
        const update = this.findOne(id)
        if (!update) {
            throw new NotFoundException('Author not found')
        }
        Object.assign(data, update)
        return await this.playlistRepo.update(id, data)
    }
}