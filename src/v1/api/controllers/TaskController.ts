import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {CreateTasksDTO} from "../../DTOs/CreateTasksDTO";
import {TaskService} from "../services/TaskService";

@Controller("task")
export class TaskController {
    constructor(private taskService: TaskService) {
    }

    @Post()
    async create(@Body() body: CreateTasksDTO){
        const task = await this.taskService.create(body);
        return task;
    }

}