import {Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { DbJar } from '../entities/DbJar';
import {Prisma} from '@prisma/client'

@Injectable()
export class JarRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<DbJar> {
    return this.prisma.jar.findFirst({
      where: {id},
    })
  }

  async update(data: Prisma.JarUpdateInput){
    await this.prisma.jar.update({
      where:{
        id: data.id as string,
      },
      data:{
        balance: data.balance,
        description: data.description,
        goal: data.goal,
      }
    })
  }
}