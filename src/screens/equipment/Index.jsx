import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { gStyles } from "../../../styles/gStyle";
import { TextInput } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import FilteredCard from "../../components/filteredCard/FilteredCard";

export default Equipment = () => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.view}>
      <View style={gStyles.container}>
        <View style={styles.viewInput}>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons
              name="search"
              size={24}
              color="#C05E2B"
              style={{ verticalAlign: "middle", paddingRight: 5 }}
            />
            <TextInput placeholder="Поиск" onChangeText={(e) => setValue(e)} />
          </View>
          <View>
            <TouchableOpacity>
              <Ionicons name="filter" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productCard}>
          <FilteredCard />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'black'
  },
  viewInput: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    padding: 9,
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "#fff",
  },
  productCard: {},
});
