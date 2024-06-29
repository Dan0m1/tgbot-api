import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateJarUserDTO {
  @IsString()
  name: string;
  @IsNumber()
  moneyGoal: number;
}