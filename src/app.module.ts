import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { AlbumsModule } from './albums/albums.module';
import { MusicModule } from './music/music.module';
@Module({
  imports: [
    AuthorModule,
    AlbumsModule,
    MusicModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
