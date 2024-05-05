import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
                uri: "https://cdn.dribbble.com/userupload/7667073/file/original-4488ef7ede3f97ca753e450973309c27.png?resize=400x300&vertical=center",
              }}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text>{data.title}</Text>
          <Text>{data.address}</Text>
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
    height: 370,
    // backgroundColor: "red",
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  wrapper: {
    display: "flex",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
