import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Statement } from '../../database/entities/Statement';
import { AxiosError } from 'axios';
import { ClientInfo } from '../../database/entities/ClientInfo';
import { ConfigService } from '@nestjs/config';
import { Jar } from '@prisma/client';

@Injectable()
export class MonobankService {
  constructor(private httpService: HttpService, private configService: ConfigService) {
  }

  async getJarInfo(): Promise<Jar> {
    const clientInfo = await this.fetchClientInfo();
    const account = this.configService.get<string>("jarAccount");
    return clientInfo.jar.find(jar => jar.id === account);
  }

  async fetchClientInfo():Promise<ClientInfo>{
    const url = this.configService.get<string>("monobankClientInfoUrl");
    const config = {
      headers: {"X-TOKEN": this.configService.get<string>("xToken")}
    }
    const {data} = await firstValueFrom(
      this.httpService.get<ClientInfo>(url, config).pipe(
      catchError((error: AxiosError) => {
        throw 'An error happened!';
      }),
    ))
    return data;
  }

  async getJarStatements(){
    const statements = await this.fetchStatements();
    return statements.map((statement: Statement) => {
      return {
        operationAmount: statement.operationAmount,
        description: statement.description,
        comment: statement.comment,
      }
    })
  }

  async fetchStatements():Promise<Statement[]> {
    const from = (Date.now()-4*7*24*60*60*1000)/1000;
    const account = this.configService.get<string>("jarAccount");
    const url = this.configService.get<string>("monobankStatementUrl")+account+"/"+from;
    const config = {
      headers: {"X-TOKEN": this.configService.get<string>("xToken")}
    }
    const {data} = await firstValueFrom(
      this.httpService.get<Statement[]>(url, config).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
    ))
    return data;
  }
}