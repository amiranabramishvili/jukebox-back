import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { playlistRepository } from './playlist.repository';

@Injectable()
export class PlaylistService {
  constructor(private readonly playlistRepo: playlistRepository){}
  create(createPlaylistDto: CreatePlaylistDto) {
    return this.playlistRepo.create(createPlaylistDto);
  }

  findAll() {
    return this.playlistRepo.findAll();
  }

  findOne(id: number) {
    return this.playlistRepo.findOne(id);
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistRepo.update(id, updatePlaylistDto);
  }

  remove(id: number) {
    return this.playlistRepo.remove(id);
  }
}
