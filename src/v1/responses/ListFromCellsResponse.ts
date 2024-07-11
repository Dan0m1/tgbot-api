export class ListFromCellsResponse {
  assignee: string;
  cells: {
    id: number;
    item: string;
    description: string;
    isDone: boolean;
  }[]
}