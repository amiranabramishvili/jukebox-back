import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';

import { MusicModule } from './music/music.module';
import { AlbumModule } from './album/album.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { FilesModule } from './files/files.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database-1.cjik0uo02g88.eu-north-1.rds.amazonaws.com',
      port: 3306,
      username: 'jukebox',
      password: 'Chichinadze14$',
      database: 'novatori',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MusicModule,
    AuthorModule,
    AlbumModule,
    UserModule,
    PlaylistModule,
    AuthModule,
    FilesModule,
    AwsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
