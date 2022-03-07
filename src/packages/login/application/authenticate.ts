import { useAuth } from '../adapter/authAdapter';
import { useUserStorage } from '../adapter/storageAdapter';
import { AuthenticationService, UserStorageService } from './ports';

export function useAuthenticate() {
  const storage: UserStorageService = useUserStorage();
  const auth: AuthenticationService = useAuth();

  async function authenticate(name: string, password: string) {
    const loggedInUser = await auth.auth(name, password);
    // 알림
    storage.updateUser(loggedInUser);
    // 페이지 이동
  }

  return {
    user: storage.user,
    authenticate,
  };
}
