import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Author } from "./entities/author.entity";
import { Repository, ILike } from "typeorm";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { SearchAuthorDto } from './dto/search-author.dto';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(Author)
    private authorRepo: Repository<Author>
  ) {}

  createAuthor(data: CreateAuthorDto) {
    const newAuthor = Object.assign(new Author(), data);
    return this.authorRepo.save(newAuthor);
  }

  findAllAuthor() {
    return this.authorRepo.find();
  }

  findOneAuthor(id: number) {
    return this.authorRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.authorRepo.delete(id);
  }

  async updateAuthor(id: number, data: UpdateAuthorDto) {
    const author = await this.findOneAuthor(id);
    if (!author) {
      throw new Error('Author not found');
    }
    Object.assign(author, data);
    return this.authorRepo.save(author);
  }

  async search(params: SearchAuthorDto): Promise<Author[]> {
    const where: any = {};

    if (params.firstName) {
      where.firstName = ILike(`%${params.firstName}%`);
    }

    if (params.lastName) {
      where.lastName = ILike(`%${params.lastName}%`);
    }

    return await this.authorRepo.find({ where });
  }
}
