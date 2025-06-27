import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumService {
  album: (CreateAlbumDto & { id: number })[] = [];
  idCount = 1;
  create(createAlbumDto: CreateAlbumDto) {
    const idCount = {
      id: this.idCount++,
      ...createAlbumDto,
    };
    this.album.push(idCount);
    return idCount;
  }

  findAll() {
    return this.album;
  }

  findOne(id: number) {
    for (let i = 0; i < this.album.length; i++) {
      if (this.album[i].id === id) {
        return this.album[i];
      }
    }
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    for (let i = 0; i < this.album.length; i++) {
      if (this.album[i].id === id) {
        Object.assign(this.album[i], updateAlbumDto);
        return this.album[i];
      }
    }
    return null;
  }

  remove(id: number) {
    for (let i = 0; i < this.album.length; i++) {
      if (this.album[i].id === id) {
        this.album.splice(i, 1);
      }
    }
  }
}
