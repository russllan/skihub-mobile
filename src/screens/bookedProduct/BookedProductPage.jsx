import { useQuery } from "@tanstack/react-query";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import bookedProductService from "../../services/bookedProduct.service";
import BookedProductCard from "../../components/bookedProductCard/BookedProductCard";

export default BookedProductPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ["get-booket-product"],
    queryFn: bookedProductService.getAll,
  });

  if (!isPending) {
    console.log(data);
  }
  return (
    <View style={styles.viewBooked}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "600", paddingVertical: 15 }}>
          Заброинрованные снаряжения:
        </Text>
        <ScrollView style={styles.viewScroll}>
          <View style={styles.viewBookedCard}>
            {data?.map((item) => (
              <BookedProductCard item={item.product} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBooked: {
    flex: 1,
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 100,
  },
  viewBookedCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  viewScroll: {
    flex: 1,
  },
});
