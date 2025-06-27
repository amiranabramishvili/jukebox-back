import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Author } from "./entities/author.entity";
import { Repository } from "typeorm";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Injectable()
export class AuthorRepository {
    constructor(
        @InjectRepository(Author)
        private authorRepo: Repository<Author>
    ) { }

    createAuthor(data: CreateAuthorDto) {
        const newAuthor = Object.assign(new Author(), data)
        return this.authorRepo.save(newAuthor)
    }

    findAllAuthor() {
        return this.authorRepo.find()
    }

    findOneAuthor(id: number) {
        return this.authorRepo.findOneBy({ id })
    }

    remove(id: number) {
        return this.authorRepo.delete(id)
    }

    updateAuthor(id: number, data: UpdateAuthorDto) {
        const update = this.findOneAuthor(id)
        if (!update) {
            throw new Error('Author not found')
        }
        Object.assign(data, update)
        return this.authorRepo.update
    }
}