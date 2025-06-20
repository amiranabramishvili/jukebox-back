import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';



@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  create(@Query() query: CreateSearchDto) {
    const result = this.searchService.create(query);
    return result
      
  }

  @Get()
  findAll() {
    return this.searchService.findAll();
  }

}
