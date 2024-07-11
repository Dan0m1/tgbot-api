export class ListResponse {
  title: string;
  cells: {
    id: number;
    item: string;
    description?: string;
    isDone?: boolean;
    assignee?: string;
  }[]
}