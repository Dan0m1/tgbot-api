import { Module } from '@nestjs/common';
import { ListCellController } from '../api/controllers/ListCellController';
import { ListCellService } from '../api/services/ListCellService';
import { MapperModule } from './MapperModule';

@Module({
  controllers: [
    ListCellController,
  ],
  providers: [
    ListCellService,
  ],
  exports: [
    ListCellService,
  ],
  imports: [
    MapperModule,
  ]
})
export class ListCellModule{}