import {IsOptional, IsString} from 'class-validator'

export class CreateUserDTO {
    id: string | null;

    username: string | null;
}