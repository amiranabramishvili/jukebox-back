import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorRepository } from './author.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository:AuthorRepository){}
 
  create(createAuthorDto: CreateAuthorDto) {
    return this.authorRepository.createAuthor(createAuthorDto)
  }

  findAll() {
    return this.authorRepository.findAllAuthor()
  }

  findOne(id: number) {
    return this.authorRepository.findOneAuthor(id)
   
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.authorRepository.updateAuthor(id,updateAuthorDto)
    
  }

  remove(id: number) {
    return this.authorRepository.remove(id)
    
  }
}
