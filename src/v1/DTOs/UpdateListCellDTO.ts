import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateListCellDTO {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;

  @IsOptional()
  @IsString()
  assignee?: string;
}