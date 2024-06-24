import {Task} from "@prisma/client";

export class UserWithTasksResponse {
    id: number;
    userId: string;
    username: string;
    name: string;
    tasks: Task[];
}