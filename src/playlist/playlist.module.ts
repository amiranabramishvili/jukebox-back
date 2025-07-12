import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { User } from 'src/user/entities/user.entity';
import { Music } from 'src/music/entities/music.entity';
import { playlistRepository } from './playlist.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Playlist])],
  controllers: [PlaylistController],
  providers: [PlaylistService,playlistRepository]
})
export class PlaylistModule {}
