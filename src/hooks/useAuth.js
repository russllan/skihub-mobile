import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../../services/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import $api from "../../services";

const useAuth = () => {
  const [isLoading, setLoading] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const navigation = useNavigation();
  const [isError, setError] = useState(false);

  const checkAuth = async () => {
    try {
      setLoading(true);
      const res = await AsyncStorage.getItem("key");
      if (res) {
        setAuth(true);
        navigation.navigate("Root");
      } else {
        setAuth(false);
        navigation.navigate("Auth");
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    } finally {
      setLoading(false);
    }
  };

  const SignUp = async (data) => {
    try {
      setLoading(true);
      const res = await $api.post("user/create", { ...data });
      await AsyncStorage.setItem("key", res.data.token);
      navigation.navigate("Root");
      setError(false);
      return res.data;
    } catch (error) {
      console.error("Error signing up:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const SignIn = async (data) => {
    setLoading(true);
    try {
      const res = await $api.post("/auth/login", { ...data });
      await AsyncStorage.setItem("key", res.data.token);
      navigation.navigate("Root");
      console.log(res.data);
      setError(false);
      return res.data;
    } catch (error) {
      console.error("Error signing in:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const SignOut = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Auth");
    } catch (e) {
      console.log(e);
    }
  };

  return {
    isAuth,
    isLoading,
    isError,
    checkAuth,
    SignIn,
    SignUp,
    SignOut,
  };
};

export default useAuth;
