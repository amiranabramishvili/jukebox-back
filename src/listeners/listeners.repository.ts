import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Listener } from "./entities/listener.entity";
import { Repository } from "typeorm";
import { CreateListenerDto } from "./dto/create-listener.dto";
import { UpdateListenerDto } from "./dto/update-listener.dto";

@Injectable()
export class ListenersRepository {
    constructor(@InjectRepository(Listener) private listenersRepository: Repository<Listener>) {}

    async findAll(){
        return await this.listenersRepository.find();
    }
    async findOne(id: number){
        return await this.listenersRepository.findOneBy({id});
    }
    async create(createListenerDto: CreateListenerDto) {
        const newListener = this.listenersRepository.create(createListenerDto);
        return await this.listenersRepository.save(newListener);
    }

    async update(id: number, updateListenerDto: UpdateListenerDto){
        return await this.listenersRepository.update(id, updateListenerDto)
    }
    async delete(id: number){
        await this.listenersRepository.softDelete(id);
        return await this.listenersRepository.findOne({ where: { id  }, withDeleted: true  })
    }
}