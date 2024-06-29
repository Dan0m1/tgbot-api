import {Injectable} from "@nestjs/common";
import {TaskRepository} from "../../database/repositories/TaskRepository";
import {DbTask} from "../../database/entities/DbTask";
import {CreateTasksDTO} from "../../DTOs/CreateTasksDTO";
import {UserService} from "./UserService";
import { Prisma } from '@prisma/client';
import { DeleteTaskDTO } from '../../DTOs/DeleteTaskDTO';

@Injectable()
export class TaskService {
    constructor(private taskRepository: TaskRepository) {}

    async create(body: CreateTasksDTO): Promise<DbTask>{
        const {description, users} = body;
        return this.taskRepository.create({
            description,
            users:{
                connectOrCreate: users.map((user): Prisma.UserCreateOrConnectWithoutTasksInput => {
                    let payload:{userId?: string, username?:string, name?: string} = {}
                    if(user.userId){
                        payload.userId = user.userId
                    }
                    if(user.username){
                        payload.username = user.username
                    }
                    if(user.name){
                        payload.name = user.name
                    }
                    return {
                        where: payload as Prisma.UserWhereUniqueInput,
                        create: payload,
                    }
                })
            }
        })
    }

    async delete(body: DeleteTaskDTO){
        await this.taskRepository.delete(body);
        return true;
    }

}