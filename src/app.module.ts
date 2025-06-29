import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';

import { MusicModule } from './music/music.module';
import { AlbumModule } from './album/album.module';
@Module({
  imports: [
    MusicModule,
    AuthorModule,
    AlbumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
