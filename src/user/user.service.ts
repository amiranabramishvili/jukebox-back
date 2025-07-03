import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hashPassword(createUserDto.password);

    return await this.userRepository.create(createUserDto);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto?.password) {
      updateUserDto.password = await this.hashPassword(updateUserDto.password);
    }

    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}
