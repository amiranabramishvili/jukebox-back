import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async findAll() {
        return await this.userRepository.createQueryBuilder('user')
        .leftJoinAndSelect('playlist','p')
        .getMany()
    }

    async findOne(id: number) {
        return await this.userRepository.findOneBy({id});
    }

    async findByEmail(email: string) {
        return await this.userRepository.findOneBy({ email });
    }
    async create(createUserDto: CreateUserDto) {
        const newUser =  this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser);
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.userRepository.update(id, updateUserDto);
    }

    async delete(id: number) {
        await this.userRepository.softDelete({id});
        return await this.userRepository.findOne({where:{id}, withDeleted: true})
    }
}