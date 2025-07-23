import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileRepository } from './files.repository';
import { S3Service } from 'src/aws/services/s3.service';

@Injectable()
export class FilesService {
  constructor(
    private readonly fileReposotory: FileRepository,
    private readonly s3Service: S3Service
  ) { }
  async uploadFile(file: Express.Multer.File) {
    const buffer: Buffer = file.buffer
    const fileName = file.originalname.split('.').slice(0, -1).join('.')

    this.s3Service.upload()

    const savedFile = await this.fileReposotory.UploadFile(fileName, 's3')

    return savedFile
  }
}


