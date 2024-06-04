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
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import ProductCard from "../productCard/ProductCard";

export default BaseDetail = ({ dataBase }) => {
  const navigation = useNavigation();
  const onShow = () => {
    navigation.navigate("product", { baseId: dataBase.id });
  };
  // console.log(dataBase);

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
          </View>
        </ImageBackground>
      </View>
      <View style={gStyles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.mainSubText}>{dataBase.title}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View>
              <FontAwesome name="star-o" size={24} color="black" />
            </View>
            <View>
              <Text>{dataBase?.reviews[0]?.rating}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            borderBottomColor: "white",
            borderBottomWidth: 1,
            paddingBottom: 19,
          }}
        >
          <EvilIcons name="location" size={24} color="black" />
          <Text style={styles.minText}>{dataBase.address}</Text>
        </View>
        <Text style={styles.descriptionText}>Описание</Text>
        <Text style={{ paddingVertical: 25, paddingLeft: 12 }}>
          {dataBase.text}
        </Text>
        <View style={styles.viewCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>{`Всего снаряжений: ${dataBase?.productes?.length}`}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("equipmentBase", {productes: dataBase?.productes})
              }
              style={styles.btn}
            >
              <Text style={{ width: 80, textAlign: "center" }}>
                {"Перейти к снаряжению"}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ width: "100%", height: 800, marginBottom: 100 }}>
            {dataBase?.productes?.map((item) => (
              <ProductCard item={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    width: "100%",
    height: "86%",
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
  mainSubText: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 10,
    color: "#fff",
  },
  minText: {
    paddingHorizontal: 15,
    opacity: 0.6,
    paddingLeft: 0,
    color: "#fff",
  },
  descriptionText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 10,
    color: "#fff",
  },
  wrapperImageSlapes: {
    paddingVertical: 0,
  },
  viewCard: {
    width: "100%",
    height: 400,
    flexDirection: "column",
    paddingVertical: 40,
    flexWrap: "wrap",
    gap: 15,
  },
  btn: {
    backgroundColor: "#6A5ACD",
    paddingHorizontal: 22,
    paddingVertical: 5,
    borderRadius: 7,
  },
});
