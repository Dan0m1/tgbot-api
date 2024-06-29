import {Injectable} from "@nestjs/common";
import {Prisma} from "@prisma/client";
import {DbTask} from "../entities/DbTask";
import {PrismaService} from "../PrismaService";

@Injectable()
export class TaskRepository {
    constructor(private prisma : PrismaService)
    {}

    async create(data: Prisma.TaskCreateInput): Promise<DbTask>{
        return this.prisma.task.create({
            data
        })
    }

    async delete(data: Prisma.TaskWhereUniqueInput){
        await this.prisma.task.delete({
            where: data,
        })
    }
}