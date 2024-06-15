import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TourCard({ tour }) {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => navigation.navigate("tourDetails", tour.id)}
      >
        <View style={styles.card}>
          <View style={{ width: "100%", height: "100%" }}>
            <Image
              source={{
                uri: tour?.image,
              }}
              style={styles.image}
            />
            <View
              style={{
                width: "97%",
                alignSelf: 'center',
                position: "absolute",
                zIndex: 100,
                top: 120,
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 20,
                backgroundColor: "transparent",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Text style={styles.title}>{tour.title}</Text>
              <Text style={styles.text}>{tour.location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-start",
    paddingHorizontal: 7,
    alignItems: "center",
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
  },
  text: {
    opacity: 0.7,
  },
});
