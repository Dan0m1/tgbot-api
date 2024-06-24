export class JarResponse {
  id: string;
  sendId: string;
  title: string;
  description: string;
  balance: number;
  goal: number;
  users: {
    fulfilled: boolean;
    name: string;
  }[]
}