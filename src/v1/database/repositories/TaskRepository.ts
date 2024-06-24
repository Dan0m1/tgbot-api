import {Injectable} from "@nestjs/common";
import {Prisma} from "@prisma/client";
import {DbTask} from "../entities/DbTask";
import {PrismaService} from "../PrismaService";

@Injectable()
export class TaskRepository {
    constructor(private prisma : PrismaService)
    {}

    async create(data: Prisma.TaskCreateInput): Promise<DbTask>{
        console.log()
        return this.prisma.task.create({
            data
        })
    }
}