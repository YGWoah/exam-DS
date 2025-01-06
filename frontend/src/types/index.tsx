export interface Check {
  id: string;
  checkNumber: string;
  bankCode: string;
  accountNumber: string;
  customerName: string;
  amount: number;
  isCertified: boolean;
}

export interface BankAgency {
  id: string;
  name: string;
  city: string;
  serviceUrl: string;
}

export type OperationType =
  | 'DEBIT'
  | 'CREDIT'
  | 'CERTIFICATION_CHEQUE';

export interface Operation {
  id: string;
  date: string;
  amount: number;
  checkNumber: string;
  type: OperationType;
  description: string;
}
