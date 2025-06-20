import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';


export interface Music {
  id: number;
  name: string;
  url: string;
}


@Injectable()
export class MusicService {
  private musics: Music[] = [];

  create(data: CreateMusicDto): Music {
    const newMusic: Music = {
      id: this.musics?.[this.musics.length - 1]?.id + 1 || 1,
      name: data.name,
      url: data.url,
    }

    this.musics.push(newMusic);
    return newMusic;
  }

  findAll(): Music[] {
    return this.musics;
  }

  findOne(id: number) {
    return this.musics.find((element) => id === element.id);
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    const music = this.findOne(id);

    if (!music) {
      throw new Error(`Music with id ${id} not found`);
    }
    music.name = updateMusicDto.name;
    music.url = updateMusicDto.url;
    return music;
  }

  remove(id: number) {
    this.musics = this.musics.filter((element) => element.id !== id);
  }
}
