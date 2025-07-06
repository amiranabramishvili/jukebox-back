import { Injectable } from "@nestjs/common";
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
        const newPlaylist = await Object.assign(new Playlist(),createPlaylistDto)
        return this.playlistRepo.save(newPlaylist)
    }

    async findAll(){
        return await this.playlistRepo.find()
    }

    async findOne(id: number){
        return await this.playlistRepo.findOneBy({id})
    }

    async remove(id: number){
        return await this.playlistRepo.delete(id)
    }

    async update(id: number,updatePlaylistDto: UpdatePlaylistDto){
        const update = this.findOne(id)
        if (!update) {
            throw new Error('Author not found')
        }
        Object.assign(updatePlaylistDto, update)
        return await this.playlistRepo.update
    }
}