import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { AlbumsModule } from './albums/albums.module';
@Module({
  imports: [AuthorModule,AlbumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
