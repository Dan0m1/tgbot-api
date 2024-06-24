import {Module} from "@nestjs/common";
import {UsersController} from "../api/controllers/UserController";
import {UserService} from "../api/services/UserService";
import {MapperModule} from "./MapperModule";

@Module({
    controllers: [UsersController],
    providers:[UserService],
    exports: [UserService],
    imports: [MapperModule]
})
export class UserModule{}