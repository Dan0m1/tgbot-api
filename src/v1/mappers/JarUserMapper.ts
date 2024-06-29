import { DbJarUser } from '../database/entities/DbJarUser';
import { JarUserResponse } from '../responses/JarUserResponse';

export class JarUserMapper {
  async getAllJarUsers(jarUsers: DbJarUser[]): Promise<JarUserResponse[]> {
    const response: JarUserResponse[] = [];
    for (let jarUser of jarUsers) {
      response.push(await this.getJarUser(jarUser));
    }
    return response;
  }

  async getJarUser(jarUser: DbJarUser): Promise<JarUserResponse> {
    return{
      name: jarUser.name,
      fulfilled: jarUser.fulfilled,
      moneyStatus: `${jarUser.moneySent/100}/${jarUser.moneyGoal/100}`,
    }
  }
}