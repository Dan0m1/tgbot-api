import {UserMapper} from "../mappers/UserMapper";
import {Module} from "@nestjs/common";
import { JarMapper } from '../mappers/JarMapper';

@Module({
    providers: [
        UserMapper,
        JarMapper
    ],
    exports: [
        UserMapper,
        JarMapper,
    ]
})
export class MapperModule {}
