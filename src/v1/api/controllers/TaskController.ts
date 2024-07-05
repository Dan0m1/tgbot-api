import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import {CreateTasksDTO} from "../../DTOs/CreateTasksDTO";
import {TaskService} from "../services/TaskService";
import { DeleteTaskDTO } from '../../DTOs/DeleteTaskDTO';
import { TaskResponse } from '../../responses/TaskResponse';

@Controller("task")
export class TaskController {
    constructor(private taskService: TaskService) {
    }

    @Post()
    async create(@Body() body: CreateTasksDTO): Promise<TaskResponse>{
        return await this.taskService.create(body);
    }

    @Delete()
    async delete(@Body() body: DeleteTaskDTO): Promise<boolean>{
        return await this.taskService.delete(body)
    }

}