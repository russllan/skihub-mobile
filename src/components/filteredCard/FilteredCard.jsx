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

export default FilteredCard = () => {
  const { isPending, data } = useProduct();
  return (
    <View style={styles.view}>
      <View style={styles.viewFilter}>
        <FlatList
          data={dataFilter}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View style={{ width: 120 }}>
              <TouchableOpacity style={{ width: "100%" }}>
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
            data={data}
            horizontal
            pagingEnabled
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <View style={{paddingRight: 50}}><ProductCard item={item} /></View>}
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
