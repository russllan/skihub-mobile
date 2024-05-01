import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  ImageBackground,
} from "react-native";
import BaseCard from "../../components/basesCard/BasesCard";
import { gStyles } from "../../../styles/gStyle";

export default HomePage = () => {
  const [tken, setTken] = useState("");

  const getId = async () => {
    const res = await AsyncStorage.getItem("key");
    setTken(res);
  };

  useEffect(() => {
    getId();
  }, []);

  return (
    <View style={gStyles.screen}>
      <View style={styles.top}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1609952769887-7905b6b02c0f?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={{ width: "100%", height: 300 }}
          borderRadius={10}
          blurRadius={0.8}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: 50,
              position: "absolute",
              bottom: 90,
              opacity: 0.9,
            }}
          >
            <TextInput
              placeholder="Введите для поиска"
              maxLength={15}
              style={gStyles.textInput}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        <View style={gStyles.container}>
          {/* <Text>{tken}</Text> */}
          <BaseCard />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: "25%",
  },
  bottom: {
    width: "100%",
    height: "75%",
    top: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
    position: "relative",
  },
});
