import {Task} from "@prisma/client";
import { UserResponse } from './UserResponse';

export class UserWithTasksResponse extends UserResponse{
    name: string;
    tasks: Task[];
}