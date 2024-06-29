export class ListFromCellsResponse {
  assignee: string;
  cells: {
    id: number;
    item: string;
    amount: number;
    isDone: boolean;
  }[]
}