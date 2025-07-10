import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Album } from './entities/album.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { ILike } from 'typeorm';
import { SearchAlbumDto } from './dto/search-album.dto';

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
      throw new Error('raghaca errori ar mushaobs dzmao saiti');
    }
    Object.assign(updateAlbum, data);
    return this.albumRepository.update(id, data);
  }

  remove(id: number) {
    return this.albumRepository.softDelete(id)
  }
  async search(params: SearchAlbumDto): Promise<Album[]> {
  const where: any = {};

  if (params.title) {
    where.title = ILike(`%${params.title}%`);
  }

  if (params.artistName) {
    where.artistName = ILike(`%${params.artistName}%`);
  }

  return await this.albumRepository.find({ where });
}
}
