import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import {Prisma} from "@prisma/client"
import { DbListCell } from '../entities/DbListCell';

@Injectable()
export class ListCellRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ListCellCreateInput){
    return this.prisma.listCell.create({
      data
    });
  }

  async findMany(data: Prisma.ListCellWhereInput): Promise<DbListCell[]>{
    return this.prisma.listCell.findMany({
      where: {
        assignee: data.assignee
      }
    })
  }

  async findOne(id: number): Promise<DbListCell> {
    return this.prisma.listCell.findUnique({
      where: {id}
    })
  }

  async updateById(data: Prisma.ListCellUpdateArgs){
    return this.prisma.listCell.update(data)
  }

  async deleteOne(data: Prisma.ListWhereUniqueInput){
    return this.prisma.listCell.delete({
      where:{
        id: data.id
      }
    })
  }

  async deleteMany(data: Prisma.ListCellWhereInput){
    return this.prisma.listCell.deleteMany({
      where: data,
    })
  }
}