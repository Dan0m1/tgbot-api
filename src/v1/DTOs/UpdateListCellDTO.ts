import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateListCellDTO {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;

  @IsOptional()
  @IsString()
  assignee?: string;
}