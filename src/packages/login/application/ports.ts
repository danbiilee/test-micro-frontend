import { User } from 'src/packages/domain/user';

export interface UserStorageService {
  user?: User;
  updateUser: (user: User) => void;
}

export interface AuthenticationService {
  auth(name: string, password: string): Promise<User>;
}
