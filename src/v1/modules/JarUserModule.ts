import { Module } from '@nestjs/common';
import { JarUserController } from '../api/controllers/JarUserController';
import { JarUserService } from '../api/services/JarUserService';
import { MonobankModule } from './MonobankModule';
import { MapperModule } from './MapperModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [
    JarUserController,
  ],
  providers: [
    JarUserService,
  ],
  exports: [
    JarUserService
  ],
  imports: [
    MonobankModule, MapperModule, ConfigModule,
  ]
})
export class JarUserModule {}