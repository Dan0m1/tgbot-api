import { Body, Controller, Delete, Param, Patch, Post, Get, Query } from '@nestjs/common';
import {CreateUserDTO} from "../../DTOs/CreateUserDTO";
import {UserService} from "../services/UserService";
import {UserMapper} from "../../mappers/UserMapper";
import {UserResponse} from "../../responses/UserResponse";
import {DbUser} from "../../database/entities/DbUser";
import {QueryTasksDTO} from "../../DTOs/QueryTasksDTO";
import {DbUserWithTasks} from "../../database/entities/DbUserWithTasks";
import {UserWithTasksResponse} from "../../responses/UserWithTasksResponse";

@Controller('users')
export class UsersController {
    constructor(
        private userService: UserService,
        private userMapper: UserMapper,
    ) {}

    @Post()
    async create(@Body() body: CreateUserDTO): Promise<UserResponse>{
        const user: DbUser = await this.userService.create(body);
        return this.userMapper.getUser(user);
    }

    @Get()
    async getAllTasks(@Query() query: QueryTasksDTO): Promise<UserWithTasksResponse|null>{
        console.log(query)
        const userWithTasks: DbUserWithTasks|null =  await this.userService.getAllTasks(query);
        return this.userMapper.getUserWithTasks(userWithTasks);
    }
}