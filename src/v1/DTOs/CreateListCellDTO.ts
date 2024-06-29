import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateListCellDTO {
  @IsString()
  listTitle: string;

  @IsString()
  item: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  assignee?: string;
}