import { Injectable } from '@nestjs/common';
import { CreateListenerDto } from './dto/create-listener.dto';
import { UpdateListenerDto } from './dto/update-listener.dto';
import { ListenersRepository } from './listeners.repository';

@Injectable()
export class ListenersService {
  constructor(private listenersRepository: ListenersRepository) {}

  async create(createListenerDto: CreateListenerDto) {
    return await this.listenersRepository.create(createListenerDto);
  }

  async findAll() {
    return await this.listenersRepository.findAll();
  }

  async findOne(id: number) {
    return await this.listenersRepository.findOne(id);
  }

  async update(id: number, updateListenerDto: UpdateListenerDto) {
    return await this.listenersRepository.update(id, updateListenerDto);
  }

  async remove(id: number) {
    return await this.listenersRepository.delete(id);
  }
}
