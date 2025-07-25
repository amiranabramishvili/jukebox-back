import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumRepository } from './album.repository';
import { SearchAlbumDto } from './dto/search-album.dto';

@Injectable()
export class AlbumService {
  constructor(private readonly albumRepository: AlbumRepository) {}

  create(createAlbumDto: CreateAlbumDto) {
    return this.albumRepository.create(createAlbumDto);
  }

  findAll() {
    return this.albumRepository.findAll();
  }

  findOne(id: number) {
    return this.albumRepository.findOne(id);
  }

  update(id: number, data: UpdateAlbumDto) {
    return this.albumRepository.update(id, data);
  }

  remove(id: number) {
    return this.albumRepository.remove(id);
  }
  async search(params: SearchAlbumDto) {
    return await this.albumRepository.search(params);
}
}
