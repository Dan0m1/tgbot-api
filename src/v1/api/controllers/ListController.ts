import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { QueryListDTO } from '../../DTOs/QueryListDTO';
import { ListService } from '../services/ListService';
import { ListResponse } from '../../responses/ListResponse';
import { ListMapper } from '../../mappers/ListMapper';
import { CreateListDTO } from '../../DTOs/CreateListDTO';
import { DbList } from '../../database/entities/DbList';
import { DeleteListDTO } from '../../DTOs/DeleteListDTO';

@Controller("list")
export class ListController {
  constructor(private readonly listService: ListService, private readonly listMapper: ListMapper) {}

  @Get()
  async getAll():Promise<ListResponse[]> {
    const lists: DbList[] = await this.listService.getAll();
    return await this.listMapper.getAllLists(lists);
  }

  @Get("/:title")
  async getOne(@Param("title") title: string): Promise<ListResponse> {
    const list: DbList =  await this.listService.get({title});
    return await this.listMapper.getList(list);
  }

  @Post()
  async create(@Body() body: CreateListDTO):Promise<ListResponse> {
    const list:DbList =  await this.listService.create(body);
    return await this.listMapper.getList(list);
  }

  @Delete()
  @HttpCode(200)
  async delete(@Body() body: DeleteListDTO) {
    await this.listService.delete(body);
  }
}