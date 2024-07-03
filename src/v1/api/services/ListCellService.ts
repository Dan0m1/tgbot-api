import { Injectable } from '@nestjs/common';
import { ListCellRepository } from '../../database/repositories/ListCellRepository';
import { CreateListCellDTO } from '../../DTOs/CreateListCellDTO';
import { DbListCell } from '../../database/entities/DbListCell';
import { UpdateListCellDTO } from '../../DTOs/UpdateListCellDTO';

@Injectable()
export class ListCellService {
  constructor(private listCellRepository: ListCellRepository) {
  }

  async create(body: CreateListCellDTO){
    const {listTitle, ...data} = body;
    return this.listCellRepository.create({
      ...data,
      list: {
        connect: {
          title: listTitle,
        }
      }
    });
  }

  async getCellsByAssignee(assignee: string): Promise<DbListCell[]> {
    return this.listCellRepository.findMany({
      assignee
    })
  }

  async getOneById(id: number): Promise<DbListCell> {
    return this.listCellRepository.findOne(id);
  }

  async updateCell(body: UpdateListCellDTO){
    const {id, ...data} = body;
    return this.listCellRepository.updateById({
      where: { id },
      data,
    });
  }

  async deleteCellById(id: number){
    return this.listCellRepository.deleteOne({
      id
    });
  }

  async deleteCellsByAssignee(assignee: string){
    return this.listCellRepository.deleteMany({
      assignee
    })
  }
}