import React, { useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { gStyles } from "../../../styles/gStyle";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ArrowLeft from "../arrowLeft/ArrowLeft";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import ProductCard from "../productCard/ProductCard";
import CustomModal from "../modal/Modal";
import Reviews from "../reviewsCard/ReviewsCard";

export default BaseDetail = ({ dataBase }) => {
  const [isModal, setModal] = useState(false);
  const { navigate } = useNavigation();

  return (
    <View style={[gStyles.screen, { paddingVertical: 30 }]}>
      <ScrollView style={{ width: "100%", height: 800, marginBottom: 100 }}>
        <View style={{ width: "100%", height: 380 }}>
          <ImageBackground
            source={{
              uri: dataBase?.image,
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.mainContent}>
              <TouchableOpacity
                onPress={() => navigate("Root", { screen: "Profile" })}
              >
                <View style={{ bottom: 25 }}>
                  <ArrowLeft name="arrowleft" size={33} color="white" />
                </View>
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
            <TouchableOpacity
              onPress={() => setModal(true)}
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View>
                <FontAwesome name="star-o" size={24} color="white" />
              </View>
              <View>
                <Text style={{ color: "white" }}>
                  {dataBase?.reviews[0]?.rating}
                </Text>
              </View>
            </TouchableOpacity>
            {isModal && (
              <CustomModal
                isModal={isModal}
                setModal={setModal}
                width={350}
                height={400}
              >
                <View style={{ paddingVertical: 20 }}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      navigate("formReview", {
                        bs: dataBase?.id,
                      });
                      setModal(false);
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>Оставить отзыв</Text>
                  </TouchableOpacity>
                </View>
                <ScrollView style={{ width: "100%", paddingVertical: 15 }}>
                  <View style={{ flexDirection: "column", gap: 20 }}>
                    {dataBase?.reviews?.map((item) => (
                      <Reviews key={item.id} item={item} />
                    ))}
                  </View>
                </ScrollView>
              </CustomModal>
            )}
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
            <EvilIcons name="location" size={24} color="white" />
            <Text style={styles.minText}>{dataBase.address}</Text>
          </View>
          <Text style={styles.descriptionText}>Описание</Text>
          <Text
            style={{ paddingVertical: 25, paddingLeft: 12, color: "white" }}
          >
            {dataBase.text}
          </Text>
          <View style={styles.viewCard}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 15,
              }}
            >
              <Text
                style={{ color: "white" }}
              >{`Всего снаряжений: ${dataBase?.productes?.length}`}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigate("equipmentBase", {
                    productes: dataBase?.productes,
                  })
                }
                style={styles.btn}
              >
                <Text
                  style={{ width: 80, textAlign: "center", color: "white" }}
                >
                  {"Перейти к снаряжению"}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <ScrollView
                style={{
                  width: "100%",
                  height: 400,
                  paddingVertical: 10,
                  marginBottom: 100,
                  alignSelf: "center",
                  paddingLeft: 35,
                }}
              >
                {dataBase?.productes?.map((item) => (
                  <ProductCard item={item} />
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
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
    gap: 15,
  },
  btn: {
    backgroundColor: "#6A5ACD",
    paddingHorizontal: 22,
    paddingVertical: 5,
    borderRadius: 7,
  },
});
