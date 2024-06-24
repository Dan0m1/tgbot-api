import {DbUser} from "../database/entities/DbUser";
import {UserResponse} from "../responses/UserResponse";
import {DbUserWithTasks} from "../database/entities/DbUserWithTasks";
import {UserWithTasksResponse} from "../responses/UserWithTasksResponse";

export class UserMapper {
    async getUser(user: DbUser): Promise<UserResponse>{
        return {
            id: user.id,
            username: user.username,
            userId: user.userId,
        }
    }

    async getUserWithTasks(userWithTasks: DbUserWithTasks | null): Promise<UserWithTasksResponse|null>{
        if(userWithTasks === null){
            return null;
        }
        return {
            id: userWithTasks.id,
            userId: userWithTasks.userId,
            name: userWithTasks.name,
            username: userWithTasks.username,
            tasks: userWithTasks.tasks
        }
    }
}