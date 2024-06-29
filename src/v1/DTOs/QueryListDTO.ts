import { IsString } from 'class-validator';

export class QueryListDTO {
  @IsString()
  title: string;
}