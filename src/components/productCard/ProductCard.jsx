import { View, Text, StyleSheet, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import { gStyles } from "../../../styles/gStyle";

export default ProductCard = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <View style={styles.card}>
      <View>
        <Image
          source={{
            uri:
              item.image === "string"
                ? "https://images.unsplash.com/photo-1513908512605-c58d3f08079f?w=720&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vd2JvYXJkJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                : item.image,
          }}
          style={styles.img}
        />
        {like ? (
          <EvilIcons
            name="heart"
            size={30}
            color="black"
            style={styles.heart}
            onPress={() => setLike(!like)}
          />
        ) : (
          <EvilIcons
            name="heart"
            size={30}
            color="#C05E2B"
            style={styles.heart}
            onPress={() => setLike(!like)}
          />
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.viewContent}>
          <Text style={styles.hText}>{item?.title}</Text>
          <Text>{item?.amount} — кол-во</Text>
        </View>
        <View style={styles.viewContent}>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons name="location" size={24} color="black" />
            <Text style={gStyles.opacityText}>{item?.base.title}</Text>
          </View>
          <Text style={gStyles.orangeText}>
            {item?.cost}
            <Text style={{ color: "black", fontWeight: "300" }}>/сом</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: 290,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  heart: {
    position: "absolute",
    top: 15,
    left: 177,
  },
  content: {
    width: "100%",
    paddingVertical: 10,
  },
  viewContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  hText: {
    fontSize: 20,
    fontWeight: "900",
  },
});
