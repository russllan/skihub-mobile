import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default BookedProductCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Text style={{ fontSize: 17, fontWeight: "900" }}>{item.title}</Text>
        <Text>Количество: {item.amount}</Text>
      </View>
      <View style={styles.img}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: `${item.image}` }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom}>
          <Text>Стоимость: {item.cost}</Text>
        </View>
        <View style={styles.bottom}>
          <View><Text>Начало брони: {Date(item.startDate)}</Text></View>
          <View><Text>Окончание брони: {item.endDate}</Text></View>
        </View>
        <View style={{width: '100%', flexDirection: "row", justifyContent: 'space-between'}}>
          <View><Text>Заброинрованно: {item.isBooked ? 'Да' : 'Нет'}</Text></View>
          <View><Text>Тип: {item.type}</Text></View>
        </View>
        <View style={{ width: "100%", flexDirection: 'row', alignItems: "center", justifyContent: 'center'}}>
          <TouchableOpacity style={styles.btn}><Text>Отменить бронь!</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
    flexDirection: "row",
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
  }
});
