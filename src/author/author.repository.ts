import { Injectable, NotFoundException } from "@nestjs/common";
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

  create(data: CreateAuthorDto) {
    const newAuthor = Object.assign(new Author(), data);
    return this.authorRepo.save(newAuthor);
  }

  findAll() {
    return this.authorRepo.find({
      relations: {
        album: true,
        music: true
      }
    });
  }

  findOne(id: number) {
    return this.authorRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.authorRepo.delete(id);
  }

  async update(id: number, data: UpdateAuthorDto) {
    const author = await this.findOne(id);
    if (!author) {
      throw new NotFoundException('Author not found');
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

    return this.authorRepo.find({ where });
  }
}