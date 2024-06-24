import {IsOptional, IsString} from "class-validator";

export class QueryTasksDTO {
    @IsString()
    userId: string | null;
    @IsString()
    username: string | null;
}