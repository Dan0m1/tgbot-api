import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ListCellService } from '../services/ListCellService';
import { ListCellMapper } from '../../mappers/ListCellMapper';
import { CreateListCellDTO } from '../../DTOs/CreateListCellDTO';
import { DbListCell } from '../../database/entities/DbListCell';
import { UpdateListCellDTO } from '../../DTOs/UpdateListCellDTO';
import { ListFromCellsResponse } from '../../responses/ListFromCellsResponse';

@Controller("listCell")
export class ListCellController {
  constructor(private listCellService: ListCellService, private listCellMapper: ListCellMapper) {
  }

  @Post()
  async create(@Body() body: CreateListCellDTO){
    await this.listCellService.create(body);
    return true;
  }

  @Get("/assignee/:assignee")
  async getListByAssignee(@Param('assignee') assignee: string): Promise<ListFromCellsResponse> {
    const listCells: DbListCell[] = await this.listCellService.getCellsByAssignee(assignee);
    return await this.listCellMapper.getListFromCells(assignee, listCells);
  }
  @Get("/id/:id")
  async getById(@Param('id') id: number): Promise<DbListCell> {
    return await this.listCellService.getOneById(id);
  }

  @Put()
  async updateCell(@Body() body: UpdateListCellDTO){
    console.log(body)
    const updatedCell: DbListCell = await this.listCellService.updateCell(body);
    return true;
  }

  @Delete("deleteById/:id")
  async deleteById(@Param("id") id: number) {
    await this.listCellService.deleteCellById(id);
    return true;
  }

  @Delete("deleteByAssignee/:assignee")
  async deleteByAssignee(@Param("assignee") assignee: string){
    await this.listCellService.deleteCellsByAssignee(assignee);
    return true;
  }
}