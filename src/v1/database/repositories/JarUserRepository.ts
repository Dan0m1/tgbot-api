import { Prisma } from '@prisma/client';
import { PrismaService } from '../PrismaService';
import { DbJarUser } from '../entities/DbJarUser';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JarUserRepository {
  constructor(private prisma : PrismaService) {
  }

  async create(data: Prisma.JarUserCreateInput): Promise<DbJarUser>{
    return this.prisma.jarUser.create({
      data
    })
  }

  async findAll(jarId: string): Promise<DbJarUser[]>{
    return this.prisma.jarUser.findMany({
      where: {
        jarId
      },
      orderBy: [{name: 'asc'}]
    })
  }

  async findOne(name: string): Promise<DbJarUser>{
    return this.prisma.jarUser.findFirst({
      where:{name}
    })
  }

  async update(data: Prisma.JarUserUpdateInput): Promise<void>{
    const {name, ...input} = data;
    await this.prisma.jarUser.updateMany({
      where: {
        name: data.name as string,
      },
      data: input,
    })
  }
}