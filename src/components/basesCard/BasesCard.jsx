import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";

export default BasesCard = ({ data }) => {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("baseDetails", { baseId: data.id });
  };
  return (
    <View style={styles.slide}>
      <View style={styles.card}>
        <View style={{ paddingTop: 40 }}>
          <TouchableOpacity onPress={onClick}>
            <Image
              source={{
                uri: data?.image,
              }}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 15 }}>
          <Text style={styles.text}>{data.title}</Text>
          <View style={{flexDirection: 'row', gap: 5, paddingTop: 5}}>
            <EvilIcons name="location" size={24} color="white" />
            <Text style={{color: "white"}}>{data.address}</Text>
          </View>
          {/* <Text>{data.reviews.rating}</Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  card: {
    height: 400, //370
    // backgroundColor: "red",
  },
  cardImage: {
    width: 210,
    height: 240,
    borderRadius: 10,
  },
  wrapper: {
    display: "flex",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
