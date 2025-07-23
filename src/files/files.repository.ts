import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { File } from "buffer";
import { Repository } from "typeorm";
import { FileEntity } from "./entities/file.entity";
import { CreateFileDto } from "./dto/create-file.dto";

@Injectable()
export class FileRepository {
    constructor(
        @InjectRepository(FileEntity)
        private fileRepo: Repository<FileEntity>
    ) { }

    async UploadFile(name: string, url: string) {
        const newFile = new FileEntity()
        newFile.fileName = name
        newFile.url = url

        return this.fileRepo.save(newFile)

    }
}