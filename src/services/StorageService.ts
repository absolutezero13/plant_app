import AsyncStorage from "@react-native-async-storage/async-storage";

import type { UserState } from "@/store/userSlice";

export type StorageSchema = {
  user: UserState;
};

export class StorageService {
  async get<Key extends keyof StorageSchema>(
    key: Key,
  ): Promise<StorageSchema[Key] | null> {
    const storedValue = await AsyncStorage.getItem(key);
    return storedValue
      ? (JSON.parse(storedValue) as StorageSchema[Key])
      : null;
  }

  set<Key extends keyof StorageSchema>(
    key: Key,
    value: StorageSchema[Key],
  ): Promise<void> {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  remove<Key extends keyof StorageSchema>(key: Key): Promise<void> {
    return AsyncStorage.removeItem(key);
  }
}

export default new StorageService();
