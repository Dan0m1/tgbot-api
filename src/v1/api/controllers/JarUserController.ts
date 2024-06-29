import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import {CreateJarUserDTO} from '../../DTOs/CreateJarUserDTO';
import { JarUserResponse } from '../../responses/JarUserResponse';
import { JarUserService } from '../services/JarUserService';
import { JarUserMapper } from '../../mappers/JarUserMapper';
import { DbJarUser } from '../../database/entities/DbJarUser';
import { UpdateJarUserDTO } from '../../DTOs/UpdateJarUserDTO';

@Controller("jarUser")
export class JarUserController {
  constructor(private jarUserService: JarUserService, private jarUserMapper: JarUserMapper) {
  }

  @Post()
  async create(@Body() body: CreateJarUserDTO): Promise<JarUserResponse>{
    const jarUser: DbJarUser = await this.jarUserService.create(body);
    return await this.jarUserMapper.getJarUser(jarUser);
  }

  @Get()
  async getAll(): Promise<JarUserResponse[]> {
    const jarUsers:DbJarUser[] = await this.jarUserService.getAllByJar();
    return await this.jarUserMapper.getAllJarUsers(jarUsers);
  }

  @Put()
  async update(@Body() body: UpdateJarUserDTO): Promise<void> {
    await this.jarUserService.update(body);
  }
}
