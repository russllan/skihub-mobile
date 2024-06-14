import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ProductCard from "../../components/productCard/ProductCard";
import { useProduct } from "../../hooks/useProduct";
import { gStyles } from "../../../styles/gStyle";

export default Basket = () => {
  const { isPending, data } = useProduct();
  return (
    <View style={styles.basketPage}>
      <View style={styles.container}>
        <ScrollView style={styles.product}>
          {isPending ? (
            <Text>...Loading</Text>
          ) : (
            data
              ?.filter((item) => item.isBooked === true)
              .map((item) => <ProductCard key={item.id} item={item} />)
          )}
        </ScrollView>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basketPage: {
    width: "100%",
    height: "100%",
    paddingTop: 60,
    backgroundColor: 'black',
  },
  container: {
    width: "90%",
    height: 700,
    alignSelf: "center",
  },
  product: {
    flex: 1,
    alignSelf: "center",
  },
});
