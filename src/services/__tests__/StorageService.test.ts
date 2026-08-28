import AsyncStorage from "@react-native-async-storage/async-storage";

import StorageService from "@/services/StorageService";

describe("StorageService", () => {
  beforeEach(async () => {
    await AsyncStorage.clear();
  });

  it("stores, reads, and removes typed user data", async () => {
    const user = { isLoggedIn: true, isSubscriber: false };

    await StorageService.set("user", user);
    await expect(StorageService.get("user")).resolves.toEqual(user);

    await StorageService.remove("user");
    await expect(StorageService.get("user")).resolves.toBeNull();
  });
});
