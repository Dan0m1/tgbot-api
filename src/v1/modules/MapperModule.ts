import {UserMapper} from "../mappers/UserMapper";
import {Module} from "@nestjs/common";
import { JarMapper } from '../mappers/JarMapper';
import { JarUserMapper } from '../mappers/JarUserMapper';
import { ListMapper } from '../mappers/ListMapper';
import { ListCellMapper } from '../mappers/ListCellMapper';

@Module({
    providers: [
        UserMapper,
        JarMapper,
        JarUserMapper,
        ListMapper,
        ListCellMapper,
    ],
    exports: [
        UserMapper,
        JarMapper,
        JarUserMapper,
        ListMapper,
        ListCellMapper,
    ]
})
export class MapperModule {}
