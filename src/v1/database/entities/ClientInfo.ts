import { Jar } from './Jar';

export class ClientInfo {
  clientId: string;
  name: string;
  webHookUrl: string;
  permissions: string;
  accounts: {
      id: string;
      sendId: string;
      balance: number;
      creditLimit: number;
      type: string;
      currencyCode: number;
      cashbackType: string;
      maskedPan: string[];
      iban: string;
    }[];
  jar: Jar[]
}