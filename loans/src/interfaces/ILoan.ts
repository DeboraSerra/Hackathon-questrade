export interface ILoan {
  _id: string;
  totalPayed: number;
  payedQuotas: number;
  totalQuotas: number;
  total: number;
  quotasList: {
    description: string;
    dueDate: Date | string;
    value: number;
    status: 'payed' | 'expired' | 'pending' | 'default'
  }[]
}