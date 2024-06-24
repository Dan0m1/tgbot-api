import {Module} from "@nestjs/common";
import {MapperModule} from "../modules/MapperModule";
import {TaskModule} from "../modules/TaskModule";
import {UserModule} from "../modules/UserModule";
import { JarModule } from '../modules/JarModule';
import { MonobankModule } from '../modules/MonobankModule';

@Module({
    imports: [
        TaskModule,
        UserModule,
        JarModule,
        MonobankModule,
    ]
})
export class ApiModule{}