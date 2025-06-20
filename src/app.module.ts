import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< Updated upstream
import { AuthorModule } from './author/author.module';
import { AlbumsModule } from './albums/albums.module';
@Module({
  imports: [AuthorModule,AlbumsModule],
=======
import { MusicModule } from './music/music.module';

@Module({
  imports: [MusicModule],
>>>>>>> Stashed changes
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
