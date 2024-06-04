import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ProductCard from "../../components/productCard/ProductCard";
import { dataFilter } from "../../components/filteredCard/constant";

export default EquipmentBasePage = () => {
  const route = useRoute();
  const { productes } = route.params;
  const [filterData, setFilterData] = useState(productes);
  console.log(productes);

  const handleFilter = (title) => {
    title === "Все"
      ? setFilterData(productes)
      : setFilterData(filterData?.filter((item) => item.title === title));
  };

  return (
    <ScrollView style={styles.viewProduct}>
      <View style={styles.viewWrapper}>
        <View style={styles.viewFilter}>
          <FlatList
            data={dataFilter}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ paddingRight: 15 }}
                onPress={() => handleFilter(item?.title)}
              >
                <Text style={{ width: "100%", paddingLeft: 20 }}>
                  {item?.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.text}>Снаряжения горнлыжной базы:</Text>
        {filterData?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewProduct: {
    width: "100%",
    height: "100%",
  },
  viewWrapper: {
    width: "100%",
    height: "100%",
    paddingVertical: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  text: {
    paddingVertical: 10,
    fontSize: 17,
    fontWeight: "600",
  },
  viewFilter: {
    width: "100%",
    height: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
