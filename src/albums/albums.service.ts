import { Injectable, NotFoundException } from '@nestjs/common';
import { Album } from './entities/album.entity';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumsService {
  private albums: Album[] = [];
  private nextId = 1;

  create(createAlbumDto: CreateAlbumDto): Album {
    const newAlbum: Album = {
      id: this.nextId++,
      ...createAlbumDto,
    };
    this.albums.push(newAlbum);
    return newAlbum;
  }

  findAll(): Album[] {
    return this.albums;
  }

  findOne(id: number): Album {
    const album = this.albums.find(a => a.id === id);
    if (!album) {
      throw new NotFoundException(`Album with ID ${id} not found`);
    }
    return album;
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto): Album {
    const album = this.findOne(id);
    const updated = { ...album, ...updateAlbumDto };
    const index = this.albums.findIndex(a => a.id === id);
    this.albums[index] = updated;
    return updated;
  }

  remove(id: number): void {
    const index = this.albums.findIndex(a => a.id === id);
    if (index === -1) {
      throw new NotFoundException(`Album with ID ${id} not found`);
    }
    this.albums.splice(index, 1);
  }
}

