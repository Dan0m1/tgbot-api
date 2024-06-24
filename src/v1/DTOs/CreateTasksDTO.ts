import {IsArray, IsString} from "class-validator";

export class CreateTasksDTO {
    @IsString()
    description: string;

    @IsArray()
    users: {
        userId: string | null,
        name: string | null,
        username: string | null,
    }[]
}