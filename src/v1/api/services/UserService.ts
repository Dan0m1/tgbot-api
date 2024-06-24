import {Injectable} from "@nestjs/common";
import {CreateUserDTO} from "../../DTOs/CreateUserDTO";
import {DbUser} from "../../database/entities/DbUser";
import {UserRepository} from "../../database/repositories/UserRepository";
import {QueryTasksDTO} from "../../DTOs/QueryTasksDTO";
import {DbUserWithTasks} from "../../database/entities/DbUserWithTasks";

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async create(body: CreateUserDTO):Promise<DbUser>{
        const {username, id} = body;
        return this.userRepository.create({
            userId: id,
            username: username
        })
    }

    async getAllTasks(query: QueryTasksDTO): Promise<DbUserWithTasks|null>{
        if(query.userId === "undefined"){
            query.userId = null;
        }
        if(query.username === "undefined"){
            query.username = null;
        }
        return this.userRepository.findOne({
            ...query
        })
    }
}