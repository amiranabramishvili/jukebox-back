import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { AlbumsModule } from './albums/albums.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicModule } from './music/music.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Novatori131!',
      database: 'jukebox',
      autoLoadEntities: true,
      synchronize: true
    }),
    MusicModule,
    AuthorModule,
    AlbumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
