import { Controller, Get, Param, Query } from '@nestjs/common';
import { JarService } from '../services/JarService';
import { JarMapper } from '../../mappers/JarMapper';
import { DbJar } from '../../database/entities/DbJar';
import { JarResponse } from '../../responses/JarResponse';

@Controller("jar")
export class JarController {
  constructor(private jarService: JarService, private jarMapper: JarMapper) {}
   @Get()
   async getJar(): Promise<JarResponse> {
      await this.jarService.updateFromMonobank()
      const jar: DbJar = await this.jarService.findOne();
      return await this.jarMapper.getJar(jar);
   }
}