import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import {CreateTasksDTO} from "../../DTOs/CreateTasksDTO";
import {TaskService} from "../services/TaskService";
import { DeleteTaskDTO } from '../../DTOs/DeleteTaskDTO';

@Controller("task")
export class TaskController {
    constructor(private taskService: TaskService) {
    }

    @Post()
    async create(@Body() body: CreateTasksDTO){
        const task = await this.taskService.create(body);
        return task;
    }

    @Delete()
    async delete(@Body() body: DeleteTaskDTO){
        return await this.taskService.delete(body)
    }

}