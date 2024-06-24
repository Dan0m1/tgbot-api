import { DbJarUser } from './DbJarUser';

export class DbJar{
  id: string;
  sendId: string;
  title: string;
  description: string;
  balance: number;
  goal: number;
  JarUser: DbJarUser[];
}