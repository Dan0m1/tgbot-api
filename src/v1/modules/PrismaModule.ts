import {Global, Module} from "@nestjs/common";
import {TaskRepository} from "../database/repositories/TaskRepository";
import {UserRepository} from "../database/repositories/UserRepository";
import {PrismaService} from "../database/PrismaService";
import { JarRepository } from '../database/repositories/JarRepository';

@Global()
@Module({
    providers:[
        PrismaService,
        TaskRepository,
        UserRepository,
        JarRepository
    ],
    exports:[
        PrismaService,
        TaskRepository,
        UserRepository,
        JarRepository
    ]
})
export class PrismaModule{}