import { Injectable } from '@nestjs/common';
import { QueryListDTO } from '../../DTOs/QueryListDTO';
import { DbList } from '../../database/entities/DbList';
import { ListRepository } from '../../database/repositories/ListRepository';
import { CreateListDTO } from '../../DTOs/CreateListDTO';
import { DeleteListDTO } from '../../DTOs/DeleteListDTO';

@Injectable()
export class ListService {
  constructor(private listRepository: ListRepository) {
  }

  async get(query: QueryListDTO): Promise<DbList>{
    return this.listRepository.get(query);
  }

  async getAll(){
    return this.listRepository.getMany();
  }

  async create(body: CreateListDTO): Promise<DbList>{
    return this.listRepository.create(body);
  }

  async delete(body: DeleteListDTO){
    return this.listRepository.delete(body);
  }
}