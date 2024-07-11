import {IsOptional, IsString } from 'class-validator';

export class CreateListCellDTO {
  @IsString()
  listTitle: string;

  @IsString()
  item: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  assignee?: string;
}