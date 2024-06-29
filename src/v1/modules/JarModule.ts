import { Module } from '@nestjs/common';
import { JarController } from '../api/controllers/JarController';
import { JarService } from '../api/services/JarService';
import { MonobankModule } from './MonobankModule';
import { ConfigModule } from '@nestjs/config';
import { MapperModule } from './MapperModule';

@Module({
  controllers: [JarController],
  providers: [JarService],
  exports: [JarService],
  imports: [MonobankModule, ConfigModule, MapperModule],
})
export class JarModule{}