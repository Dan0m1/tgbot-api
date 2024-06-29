import { IsString } from 'class-validator';

export class CreateListDTO {
  @IsString()
  title: string;
}