import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ProductCard from "../productCard/ProductCard";
import { dataFilter } from "./constant";
import { useProduct } from "../../hooks/useProduct";
import { useState } from "react";
import FilteredBaseCard from "./FilteredBaseCard";
import { useBases } from "../../hooks/useBases";

export default FilteredCard = () => {
  const { isPending, data } = useProduct();
  const bases = useBases();
  const [filteredBases, setFiltereBases] = useState(data);
  const [filteredData, setFilteredData] = useState(filteredBases);

  const handleBaseFilter = (title) => {
    // console.log(title);
    setFiltereBases(data.filter((item) => item.base.title === title));
  };

  const handleFilter = (title) => {
    title === "Все"
      ? setFilteredData(filteredBases)
      : setFilteredData(filteredBases.filter((item) => item.type === title));
  };

  return (
    <View style={styles.view}>
      <View style={styles.viewBaseFilter}>
        <FlatList
          data={bases.data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ paddingRight: 15 }}
              onPress={() => handleBaseFilter(item.title)}
            >
              <FilteredBaseCard data={item} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.viewFilter}>
        <FlatList
          data={dataFilter}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={{ width: 120 }}>
              <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => handleFilter(item.title)}
              >
                <Text style={{ width: "65%" }}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.viewCard}>
        {isPending ? (
          <Text>...Loading</Text>
        ) : (
          <FlatList
            data={filteredData}
            horizontal
            pagingEnabled
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ paddingRight: 50 }}>
                <ProductCard item={item} />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  viewBaseFilter: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  viewFilter: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  viewCard: {
    width: "100%",
    height: 320,
    display: "flex",
    justifyContent: "center",
    paddingTop: 30,
  },
});
