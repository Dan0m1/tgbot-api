import { DbJar } from '../database/entities/DbJar';
import { JarResponse } from '../responses/JarResponse';
import { DbJarUser } from '../database/entities/DbJarUser';

export class JarMapper {
  async getJar(jar: DbJar):Promise<JarResponse>{
    return {
      id: jar.id,
      sendId: jar.sendId,
      title: jar.title,
      description: jar.description,
      balance: jar.balance,
      goal: jar.goal,
      users: jar.JarUser.map((JarUser: DbJarUser) => {
        return {
          fulfilled: JarUser.fulfilled,
          name: JarUser.name,
        }
      })
    }
  }
}