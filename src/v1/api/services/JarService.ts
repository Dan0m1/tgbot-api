import { Injectable } from '@nestjs/common';
import { JarRepository } from '../../database/repositories/JarRepository';
import { DbJar } from '../../database/entities/DbJar';
import { MonobankService } from './MonobankService';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';

@Injectable()
export class JarService {
  constructor(private jarRepository: JarRepository, private monobankService: MonobankService, private configService: ConfigService) {
  }

  async findOne(): Promise<DbJar>{
    const jarId = this.configService.get<string>('account');
    return this.jarRepository.findOne(jarId)
  }

  async updateFromMonobank(){
    const jar = await this.monobankService.getJarInfo();
    const statements = await this.monobankService.getJarStatements();
    await this.jarRepository.update({
      ...jar,
      JarUser: {
        update: statements.map((statement) => {
          if (statement.comment.startsWith("#")){
            return {
              where:{
                name: statement.comment,
              } as Prisma.JarUserWhereUniqueInput,
              data:{
                fulfilled: true,
              }
            }
          }
        })
      }
    })
  }
}