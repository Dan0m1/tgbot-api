import {Global, Module} from "@nestjs/common";
import {TaskRepository} from "../database/repositories/TaskRepository";
import {UserRepository} from "../database/repositories/UserRepository";
import {PrismaService} from "../database/PrismaService";
import { JarRepository } from '../database/repositories/JarRepository';
import { JarUserRepository } from '../database/repositories/JarUserRepository';
import { ListRepository } from '../database/repositories/ListRepository';
import { ListCellRepository } from '../database/repositories/ListCellRepository';

@Global()
@Module({
    providers:[
        PrismaService,
        TaskRepository,
        UserRepository,
        JarRepository,
        JarUserRepository,
        ListRepository,
        ListCellRepository,
    ],
    exports:[
        PrismaService,
        TaskRepository,
        UserRepository,
        JarRepository,
        JarUserRepository,
        ListRepository,
        ListCellRepository,
    ]
})
export class PrismaModule{}