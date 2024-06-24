import {Injectable} from "@nestjs/common";
import {Prisma} from "@prisma/client";
import {PrismaService} from "../PrismaService";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService)
    {}

    private include = {
        tasks: true,
    }

    async create(data: Prisma.UserCreateInput){
        return this.prisma.user.create(
            {
                data
            }
        )
    }

    async findOne(data: Prisma.UserWhereInput){
        const p =  await this.prisma.user.findFirst({
            where:{
                userId: data.userId,
                username: data.username,
            },
            include: this.include
        })
        console.log(p)
        return p;
    }

}