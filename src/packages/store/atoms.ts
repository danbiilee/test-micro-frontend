import { atom } from 'recoil';
import { User } from '../domain/user';
import { useLocalStorage } from '../localStorage/localStorageAdapter';
import { LOCALSTORAGE_USER } from '../localStorage/constants';

const userStorage = useLocalStorage<User | undefined>(LOCALSTORAGE_USER);

export const userAtom = atom<User | undefined>({
  key: 'userAtom',
  default: userStorage.getter(),
});
