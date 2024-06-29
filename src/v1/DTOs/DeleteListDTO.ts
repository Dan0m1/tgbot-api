import { IsString } from 'class-validator';

export class DeleteListDTO {
  @IsString()
  title: string;
}