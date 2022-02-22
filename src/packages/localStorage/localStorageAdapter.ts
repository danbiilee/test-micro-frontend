interface LocalStorageService<T> {
  getter: () => T;
  setter: (newState: T) => void;
}

export function useLocalStorage<T>(key: string): LocalStorageService<T> {
  const getter = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (e) {
      console.error(`Can't get [${key}]'s item. \n ${e}`);
      return undefined;
    }
  };

  const setter = (newState: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newState));
    } catch (e) {
      console.error(`Can't set [${key}]'s item. \n ${e}`);
    }
  };

  return { getter, setter };
}
