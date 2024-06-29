import {IsNumber, IsString } from 'class-validator';

export class UpdateJarUserDTO {
  @IsString()
  name: string;
  @IsNumber()
  moneyGoal: number;
}