import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function BookedTourCard({ item }) {
  return (
    <View style={styles.viewCard}>
      <View style={styles.top}>
        <Text style={{ fontSize: 17, fontWeight: "900" }}>{item?.tour.title}</Text>
        <Text>Локация: {item?.tour.location}</Text>
      </View>
      <View style={styles.img}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: `${item?.tour?.image}` }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom}>
          <Text>Стоимость: {item?.tour.cost}</Text>
        </View>
        <View style={styles.bottom}>
          <View>
            <Text>Статус: {Date(item?.status)}</Text>
          </View>
          <View>
            <Text>Окончание тура: {item?.tour.text}</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>Кол-во дней: {item?.tour.amountDay}</Text>
          </View>
          <View>
            <Text>Начало тура: {item?.tour.startDate}</Text>
          </View>
          <View>
            <Text>Конец тура: {item?.tour.endDate}</Text>
          </View>
        </View>
        {/* <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.btn}>
            <Text>Отменить бронь!</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewCard: {
    width: 300,
    height: 420,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    borderRadius: 10,
    gap: 20,
    paddingTop: 10,
  },
  top: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "40%",
  },
  bottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  btn: {
    backgroundColor: "#6A5ACD",
    padding: 7,
    paddingHorizontal: 30,
    borderRadius: 7,
  },
});
