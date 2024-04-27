import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const HomePage = () => {

  const [tken, setTken] = useState("")

  const getId = async () => {
    const res = await AsyncStorage.getItem("key")

    setTken(res)
  }

  useEffect(() => {
    getId()
  }, [])

  return (
    <View>
      <Text>{tken}</Text>
    </View>
  );
};

export default HomePage;
