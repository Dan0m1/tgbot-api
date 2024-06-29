import { DbList } from '../database/entities/DbList';
import { ListResponse } from '../responses/ListResponse';

export class ListMapper {
  async getList(list: DbList): Promise<ListResponse> {
    return{
      title: list.title,
      cells: list.cells,
    }
  }

  async getAllLists(lists: DbList[]): Promise<ListResponse[]> {
    const allLists: ListResponse[] = [];
    for (const list of lists) {
      allLists.push(await this.getList(list));
    }
    return allLists;
  }
}