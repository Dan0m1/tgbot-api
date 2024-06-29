import { DbJar } from '../database/entities/DbJar';
import { JarResponse } from '../responses/JarResponse';

export class JarMapper {
  async getJar(jar: DbJar):Promise<JarResponse>{
    return {
      id: jar.id,
      sendId: jar.sendId,
      title: jar.title,
      description: jar.description,
      balance: jar.balance,
      goal: jar.goal,
    }
  }
}