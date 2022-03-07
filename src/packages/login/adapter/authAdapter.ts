import { User } from '../../domain/user';
import { AuthenticationService } from '../application/ports';

function mockApi<T>(response: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(response), 500));
}

export function useAuth(): AuthenticationService {
  const auth = (name: string, password: string) => {
    const loggedInUser: User = {
      name,
      password,
      id: Date.now().toString(),
      type: 'basic',
    };
    return mockApi(loggedInUser);
  };

  return { auth };
}
