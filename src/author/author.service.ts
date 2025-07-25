import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorRepository } from './author.repository';
import { SearchAuthorDto } from './dto/search-author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository:AuthorRepository){}
 
  create(createAuthorDto: CreateAuthorDto) {
    return this.authorRepository.create(createAuthorDto)
  }

  findAll() {
    return this.authorRepository.findAll()
  }

  findOne(id: number) {
    return this.authorRepository.findOne(id)
   
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.authorRepository.update(id,updateAuthorDto)
    
  }

  remove(id: number) {
    return this.authorRepository.remove(id)
    
  }
  async search(params: SearchAuthorDto) {
  return await this.authorRepository.search(params);
}
}
