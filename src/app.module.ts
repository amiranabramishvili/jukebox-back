import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { AlbumsModule } from './albums/albums.module';
import { SearchModule } from './search/search.module';
import { MusicModule } from './music/music.module';
@Module({
  imports: [AuthorModule,AlbumsModule, SearchModule,MusicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
