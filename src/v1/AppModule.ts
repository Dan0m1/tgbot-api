import {Module} from "@nestjs/common";
import {ApiModule} from "./api/ApiModule";
import {PrismaModule} from "./modules/PrismaModule";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import configuration from "./config/Configuration";
import { MonobankModule } from './modules/MonobankModule';

@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            envFilePath: [`.${process.env.NODE_ENV}.env`, '.env'],
        }),
        ApiModule,
        PrismaModule,
        MonobankModule,
    ]
})
export class AppModule{}