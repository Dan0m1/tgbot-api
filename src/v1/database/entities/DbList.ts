import { ListCell } from '@prisma/client';

export class DbList{
  id: number;
  title: string;
  updatedAt: Date;
  cells: ListCell[]
}