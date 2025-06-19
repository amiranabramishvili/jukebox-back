import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumsService.create(createAlbumDto);
  }

  @Get()
  findAll() {
    return this.albumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.albumsService.findOne(id);
  }

  @Patch(':id') 
  update(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateAlbumDto: UpdateAlbumDto,
) {
  return this.albumsService.update(id, updateAlbumDto);
}


  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.albumsService.remove(id);
    return { message: 'Album deleted successfully' };
  }
}

