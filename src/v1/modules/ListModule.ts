import { Module } from '@nestjs/common';
import { ListController } from '../api/controllers/ListController';
import { ListService } from '../api/services/ListService';
import { MapperModule } from './MapperModule';

@Module({
  controllers: [
    ListController,
  ],
  providers: [
    ListService,
  ],
  exports: [
    ListService
  ],
  imports:[
    MapperModule
  ]
})
export class ListModule {}