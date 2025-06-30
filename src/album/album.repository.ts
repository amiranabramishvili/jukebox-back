import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Album } from './entities/album.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class AlbumRepository {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) {}

  create(createAlbumDto: CreateAlbumDto) {
    const newAlbum = new Album();

    newAlbum.title = createAlbumDto.title;
    newAlbum.releaseDate = createAlbumDto.releaseDate;
    newAlbum.music = createAlbumDto.music;
    newAlbum.artistName = createAlbumDto.artistName;
    return this.albumRepository.save(newAlbum);
  }

  findAll() {
    return this.albumRepository.find();
  }

  findOne(id: number) {
    return this.albumRepository.findOneBy({ id });
  }

  update(id: number, data: UpdateAlbumDto) {
    const updateAlbum = this.findOne(id)
    if(!updateAlbum) {
        return null;
    }
    Object.assign(updateAlbum, data);
    return this.albumRepository.update(id, data);
  }

  remove(id: number) {
    return this.albumRepository.softDelete(id)
  }
}
