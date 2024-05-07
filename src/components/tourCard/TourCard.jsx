import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function TourCard({data}) {
  return (
    <View style={styles.card}>
      <View style={{ width: "100%", height: "60%" }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1607525692161-ea04641b081d?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnN8ZW58MHx8MHx8fDA%3D",
          }}
          style={styles.image}
        />
      </View>
      <View style={{ width: "100%", height: "39%", paddingHorizontal: 15, paddingVertical: 10 }}>
        <Text style={styles.title}>Тур в горнолыжную базу Зил</Text>
        <Text style={styles.text}>test</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 200,
    backgroundColor: "silver",
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
    opacity: 0.7
  },
});
