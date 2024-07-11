import { DbListCell } from '../database/entities/DbListCell';
import { ListFromCellsResponse } from '../responses/ListFromCellsResponse';

export class ListCellMapper {
  async getListFromCells(assignee: string, cells: DbListCell[]): Promise<ListFromCellsResponse>{
    return{
      assignee,
      cells: cells.map((cell: DbListCell) => {
        return ({
          id: cell.id,
          item: cell.item,
          description: cell.description,
          isDone: cell.isDone,
        })
      })
    }
  }
}