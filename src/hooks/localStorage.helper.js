import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getTokenFromLocalStorage() {
  try {
    const data = await AsyncStorage.getItem("key");
    const token = data ? data : "";
    return token;
  } catch (error) {
    return error;
  }
}

export async function removeTokenFromLocalStorage() {
  try {
    await AsyncStorage.removeItem("key");
  } catch (error) {
    console.error("Error removing token from AsyncStorage:", error);
  }
}
