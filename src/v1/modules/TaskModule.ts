import {Module} from "@nestjs/common";
import {TaskService} from "../api/services/TaskService";
import {TaskController} from "../api/controllers/TaskController";
import { MapperModule } from './MapperModule';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    exports: [TaskService],
    imports: [MapperModule],
})
export class TaskModule{}