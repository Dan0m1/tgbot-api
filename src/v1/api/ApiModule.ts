import {Module} from "@nestjs/common";
import {TaskModule} from "../modules/TaskModule";
import {UserModule} from "../modules/UserModule";
import { JarModule } from '../modules/JarModule';
import { JarUserModule } from '../modules/JarUserModule';
import { ListModule } from '../modules/ListModule';
import { ListCellModule } from '../modules/ListCellModule';

@Module({
    imports: [
        TaskModule,
        UserModule,
        JarModule,
        JarUserModule,
        ListModule,
        ListCellModule,
    ]
})
export class ApiModule{}