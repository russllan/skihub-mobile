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
          <View style={{ width: "100%", height: "60%" }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1607525692161-ea04641b081d?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnN8ZW58MHx8MHx8fDA%3D",
              }}
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: "39%",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <Text style={styles.title}>{tour.title}</Text>
            <Text style={styles.text}>{tour.location}</Text>
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 20,
  },
  text: {
    opacity: 0.7,
  },
});
