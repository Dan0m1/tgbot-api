import {Module} from "@nestjs/common";
import {TaskService} from "../api/services/TaskService";
import {TaskController} from "../api/controllers/TaskController";

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    exports: [TaskService],
})
export class TaskModule{}