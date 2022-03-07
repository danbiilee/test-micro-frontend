import { User } from 'src/packages/domain/user';
import { LOCALSTORAGE_USER } from 'src/packages/localStorage/constants';
import { useLocalStorage } from 'src/packages/localStorage/localStorageAdapter';
import { useRecoilState } from 'recoil';
import { userAtom } from 'src/packages/store/atoms';
import { UserStorageService } from '../application/ports';

export function useUserStorage(): UserStorageService {
  const [user, setUser] = useRecoilState(userAtom);
  const userStorage = useLocalStorage<User>(LOCALSTORAGE_USER);

  const handelUpdateUser = (newUser: User) => {
    setUser(newUser);
    userStorage.setter(newUser);
  };

  return {
    user,
    updateUser: handelUpdateUser,
  };
}
