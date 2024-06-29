import { IsNumber } from 'class-validator';

export class DeleteTaskDTO {
  @IsNumber()
  id: number;
}