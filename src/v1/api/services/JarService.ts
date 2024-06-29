import { Injectable } from '@nestjs/common';
import { JarRepository } from '../../database/repositories/JarRepository';
import { DbJar } from '../../database/entities/DbJar';
import { MonobankService } from './MonobankService';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JarService {
  constructor(private jarRepository: JarRepository, private monobankService: MonobankService, private configService: ConfigService) {
  }

  async findOne(): Promise<DbJar>{
    await this.updateFromMonobank();
    const jarId = this.configService.get<string>('account');
    return this.jarRepository.findOne(jarId);
  }

  private async updateFromMonobank(){
    const jar = await this.monobankService.getJarInfo();
    await this.jarRepository.update(jar);
  }
}