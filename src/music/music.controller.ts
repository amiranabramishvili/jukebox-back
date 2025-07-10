import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicService} from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Query } from '@nestjs/common';
import { SearchMusicDto } from './dto/search-music.dto';


@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post()
  create(@Body() createMusicDto: CreateMusicDto) {
    return this.musicService.create(createMusicDto);
  }

  @Get()
  findAll() {
    return this.musicService.findAll();
  }
  @Get('search')
  search(@Query() query: SearchMusicDto) {
    return this.musicService.search(query);
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicDto: UpdateMusicDto) {
    return this.musicService.update(+id, updateMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicService.remove(+id);
  }
}
