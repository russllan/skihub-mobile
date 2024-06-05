import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Reviews({ item }) {
  return (
    <View style={styles.viewReview}>
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {item.rating === 1 ? (
          <FontAwesome name="star-o" size={24} color="black" />
        ) : item.rating === 2 ? (
          <View style={styles.viewStars}>
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={2} color="black" />
          </View>
        ) : item.rating === 3 ? (
          <View style={styles.viewStars}>
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
          </View>
        ) : item.rating === 4 ? (
          <View style={styles.viewStars}>
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
          </View>
        ) : item.rating === 5 ? (
          <View style={styles.viewStars}>
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
            <FontAwesome name="star-o" size={24} color="black" />
          </View>
        ) : null}
      </View>
      <View style={styles.comment}>
        <Text>{item.comment}</Text>
      </View>
      <View>
        {/* <Text style={{ fontSize: 17, fontWeight: "800" }}> — phoneNumber</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewReview: {
    width: 320,
    height: 150,
    backgroundColor: "#E6E6FA",
    shadowColor: "#E6E6FA",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 20,
  },
  viewStars: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  comment: {
    height: "40%",
  },
});
