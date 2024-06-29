import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { DbList } from '../entities/DbList';
import { Prisma } from '@prisma/client';

@Injectable()
export class ListRepository {
  constructor(private prisma: PrismaService) {
  }

  private include ={
    cells: true
  }

  async get(data: Prisma.ListWhereInput): Promise<DbList>{
    return this.prisma.list.findFirst({
      where:{
        title: data.title,
      },
      include: this.include
    })
  }

  async getMany(): Promise<DbList[]>{
    return this.prisma.list.findMany({
      include: this.include,
    });
  }

  async create(data: Prisma.ListCreateInput){
    return this.prisma.list.create({
      data,
      include: this.include,
    })
  }

  async delete(data: Prisma.ListWhereUniqueInput){
    return this.prisma.list.delete({
      where: data,
    })
  }
}