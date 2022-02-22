import { useAuth } from '../adapter/authAdapter';
import { useUserStorage } from '../adapter/storageAdapter';
import { AuthenticationService, UserStorageService } from './ports';

export function useAuthenticate() {
  // 곧바로 recoil같은 상태 라이브러리에 접근하지 않음
  const storage: UserStorageService = useUserStorage();
  const auth: AuthenticationService = useAuth();

  async function authenticate(name: string, password: string) {
    const loggedInUser = await auth.auth(name, password);
    storage.updateUser(loggedInUser);
  }

  return {
    user: storage.user,
    authenticate,
  };
}
