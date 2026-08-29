import AsyncStorage from "@react-native-async-storage/async-storage";

import StorageService, { StorageKeys } from "@/services/StorageService";

describe("StorageService", () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it("stores, reads, and removes typed user data", async () => {
    const user = { isLoggedIn: true, isSubscriber: false };

    await StorageService.set(StorageKeys.user, user);
    await expect(StorageService.get(StorageKeys.user)).resolves.toEqual(user);

    await StorageService.remove(StorageKeys.user);
    await expect(StorageService.get(StorageKeys.user)).resolves.toBeNull();
  });
});
