import {Task} from "@prisma/client";

export class DbUserWithTasks {
    id: number;
    userId: string | null;
    name: string | null;
    username: string | null;
    tasks:Task[]
}