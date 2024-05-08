import React from "react";
import {
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { gStyles } from "../../../styles/gStyle";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useProduct } from "../../hooks/useProduct";
import ArrowLeft from "../arrowLeft/ArrowLeft";

export default BaseDetail = ({ dataBase }) => {
  const navigation = useNavigation();
  const onShow = () => {
    navigation.navigate("product", { baseId: dataBase.id });
  };
  // const { isPending, data } = useProduct();

  return (
    <View style={gStyles.screen}>
      <View style={{ width: "100%", height: 350 }}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?w=1440&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.mainContent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Root", { screen: "Profile" })}
            >
              <ArrowLeft name="arrowleft" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.mainText}>{dataBase.title}</Text>
            <Text style={styles.minText}>{dataBase.address}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={gStyles.container}>
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <View style={styles.wrapperImageSlapes}>
            <Image
              source={require("../../../assets/icon.png")}
              style={styles.imageSlapes}
            />
          </View>
          <Text style={{ paddingVertical: 20 }}>{dataBase.title}</Text>
          <Text style={{ paddingBottom: 25 }}>{dataBase.text}</Text>
          <TouchableOpacity style={gStyles.btn} onPress={onShow}>
            <Text>Посмотреть снаряжения горнолыжной базы</Text>
          </TouchableOpacity>
          {/* <View>{isPending ? <Text>...Loading</Text> : <Text>{data.length}</Text>}</View> */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    width: "100%",
    height: "95%",
    justifyContent: "flex-end",
  },
  mainText: {
    fontSize: 62,
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: "45%",
    paddingHorizontal: 10,
    color: "#fff",
  },
  minText: {
    paddingHorizontal: 15,
    color: "#fff",
  },
  wrapperImageSlapes: {
    paddingVertical: 20,
  },
  imageSlapes: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
});
