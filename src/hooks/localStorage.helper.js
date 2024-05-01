import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getTokenFromLocalStorage() {
  try {
    const data = await AsyncStorage.getItem("key");
    const token = data ? JSON.parse(data) : '';
    return token;
  } catch (error) {
    return error;
  }
}
