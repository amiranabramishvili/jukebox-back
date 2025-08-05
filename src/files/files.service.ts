import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileRepository } from './files.repository';
import { S3Service } from 'src/aws/services/s3.service';
import { Any } from 'typeorm';
import { MIMEType } from 'util';
import { MimeType } from 'aws-sdk/clients/kendra';

@Injectable()
export class FilesService {
  constructor(
    private readonly fileReposotory: FileRepository,
    private readonly s3Service: S3Service
  ) { }
  async uploadFile(file: Express.Multer.File) {
    const buffer: Buffer = file.buffer
    const fileName = file.originalname.split('.').slice(0, -1).join('.')

    const result = this.s3Service.upload(file, fileName)



    const savedFile = await this.fileReposotory.save(
      fileName,
      (await result).Location,
      (await result).Key,
      (await result).Bucket
    )



    return savedFile
  }
  async findOne(id: number) {
    const file = await this.fileReposotory.findOne(id)
    return file
  }
  async findAll() {
    return await this.fileReposotory.findAll()
  }


}


