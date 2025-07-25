import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { FileRepository } from './files.repository';
import { AwsModule } from 'src/aws/aws.module';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity]),AwsModule],
  controllers: [FilesController],
  providers: [FilesService,FileRepository],
  exports:[FileRepository]
})
export class FilesModule {}
