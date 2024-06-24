import {Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { DbJar } from '../entities/DbJar';
import {Prisma} from '@prisma/client'

@Injectable()
export class JarRepository {
  constructor(private prisma: PrismaService) {}

  private include = {
    JarUser: true
  }

  async findOne(id: string): Promise<DbJar> {
    return this.prisma.jar.findFirst({
      where: {id},
      include: this.include,
    })
  }

  async update(data: Prisma.JarUpdateInput){
    return this.prisma.jar.update({
      where:{
        id: data.id as string,
      },
      data:data
    })
  }
}