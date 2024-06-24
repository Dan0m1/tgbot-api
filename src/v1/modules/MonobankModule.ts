import { Module } from '@nestjs/common';
import { MonobankService } from '../api/services/MonobankService';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[
    HttpModule,
    ConfigModule,
  ],
  providers:[
    MonobankService,
    ],
  exports: [
    MonobankService,
    ]
})
export class MonobankModule {}