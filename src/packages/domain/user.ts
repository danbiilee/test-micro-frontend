type AccountType = 'basic' | 'premium';

export interface User {
  id: string;
  name: string;
  password: string;
  type: AccountType;
}
