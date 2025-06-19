import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  author:(CreateAuthorDto & {id: number})[] = []
  idCounter = 1
  create(createAuthorDto: CreateAuthorDto) {
    const idCounters = {
      id :this.idCounter++,
      ...createAuthorDto
    }
    this.author.push(idCounters)
    return idCounters
  }

  findAll() {
    return this.author
  }

  findOne(id: number) {
    for(let i = 0;i <this.author.length;i++){
      if(this.author[i].id === id){
        return this.author[i]
      }
    }
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    for (let i = 0; i < this.author.length; i++) {
      if (this.author[i].id === id) {
        Object.assign(this.author[i], updateAuthorDto);
        return this.author[i];
      }
    }
    return null; 
  }

  remove(id: number) {
    for(let i = 0;i < this.author.length;i++){
      if(this.author[i].id === id){
        this.author.splice(i,1)
      }
    }
  }
}
