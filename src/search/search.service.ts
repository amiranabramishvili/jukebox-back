import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';


@Injectable()
export class SearchService {
  searches: CreateSearchDto[] = [];

  create(createSearchDto: CreateSearchDto): CreateSearchDto {
    this.searches.push(createSearchDto);
    return createSearchDto;
  }

  findAll(): CreateSearchDto[] {
    return this.searches;
  }

}

