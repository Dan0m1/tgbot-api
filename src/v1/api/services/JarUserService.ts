import { Injectable } from '@nestjs/common';
import { JarUserRepository } from '../../database/repositories/JarUserRepository';
import { CreateJarUserDTO } from '../../DTOs/CreateJarUserDTO';
import { DbJarUser } from '../../database/entities/DbJarUser';
import {ConfigService} from '@nestjs/config';
import { UpdateJarUserDTO } from '../../DTOs/UpdateJarUserDTO';
import { MonobankService } from './MonobankService';
import { StatementResponse } from '../../responses/StatementResponse';

@Injectable()
export class JarUserService {
  constructor(private jarUserRepository: JarUserRepository, private configService: ConfigService, private monobankService: MonobankService) {
  }

  async create(body: CreateJarUserDTO): Promise<DbJarUser>{
    const jarId = this.configService.get<string>('account');
    return this.jarUserRepository.create({
      ...body,
      jar:{
        connect:{
          id: jarId,
        }
      }
    });
  }

  async getAllByJar(): Promise<DbJarUser[]>{
    await this.updateFromMonobank();
    const jarId = this.configService.get<string>('account');
    return this.jarUserRepository.findAll(jarId);
  }

  async update(body: UpdateJarUserDTO): Promise<void>{
    await this.jarUserRepository.update(body);
  }

  private async updateFromMonobank(): Promise<void>{
    const statements: StatementResponse[] = await this.monobankService.getJarStatements();
    let id: string, name : string, jarUser: DbJarUser;
    for (const statement of statements) {
      if(!statement.comment){
        continue;
      }
      id = statement.id;
      name = statement.comment.slice();
      jarUser = await this.getOne(name);
      if(!jarUser ||jarUser.statementIds.includes(id)){
        continue;
      }
      jarUser.statementIds.push(id);
      jarUser.moneySent += statement.operationAmount;
      jarUser.fulfilled = jarUser.moneySent >= jarUser.moneyGoal;
      await this.jarUserRepository.update({
        name: jarUser.name,
        fulfilled: jarUser.fulfilled,
        moneySent: jarUser.moneySent,
        statementIds: jarUser.statementIds,
      })
    }
  }

  private async getOne(name: string): Promise<DbJarUser>{
    return this.jarUserRepository.findOne(name);
  }
}