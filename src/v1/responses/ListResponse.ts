export class ListResponse {
  title: string;
  cells: {
    id: number;
    item: string;
    amount: number;
    isDone?: boolean;
    assignee?: string;
  }[]
}