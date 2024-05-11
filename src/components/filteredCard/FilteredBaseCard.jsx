import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default FilteredBaseCard = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <TouchableOpacity
      style={active ? styles.viewCardActive : styles.viewCard}
      onPress={() => setActive(!active)}
    >
      <View>
        <Image
          source={{
            uri:
              data?.image === "string"
                ? "https://images.unsplash.com/photo-1710444387561-27dd13d92aa1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                : data?.image,
          }}
          style={styles.img}
        />
      </View>
      <View style={{ width: "50%" }}>
        <Text>{data?.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewCard: {
    width: 180,
    height: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
  },
  viewCardActive: {
    width: 180,
    height: 80,
    backgroundColor: "#C05E2B",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
});
