import { useQuery } from "@tanstack/react-query";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import bookedProductService from "../../services/bookedProduct.service";
import BookedProductCard from "../../components/bookedProductCard/BookedProductCard";
import { useState } from "react";
import tourBookedService from "../../services/tourBooked.service";
import BookedTourCard from "../../components/bookedTourCard/BookedTourCard";

export default BookedProductPage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [tour, setTour] = useState(false);

  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    if (buttonId === "tours") {
      setTour(true);
    } else {
      setTour(false);
    }
  };
  const { data, isPending } = useQuery({
    queryKey: ["get-booket-product"],
    queryFn: bookedProductService.getAll,
  });

  const tourBooked = useQuery({
    queryKey: ["get-tour-booked"],
    queryFn: tourBookedService.getBookedTour,
  });

  if (!tourBooked.isPending) {
    console.log(tourBooked.data);
  }
  return (
    <View style={styles.viewBooked}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            paddingVertical: 15,
            alignSelf: "center",
          }}
        >
          Забронированные снаряжения и туры:
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Pressable
            onPress={() => handlePress("equipment")}
            style={[
              styles.btnEquipment,
              activeButton === "equipment" && styles.btnEquipmentActive,
            ]}
          >
            <Text style={styles.btnText}>Снаряжение</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress("tours")}
            style={[
              styles.btnEquipment,
              activeButton === "tours" && styles.btnEquipmentActive,
            ]}
          >
            <Text style={styles.btnText}>Туры</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.viewScroll}>
          <View style={styles.viewBookedCard}>
            {tour
              ? !tourBooked.isPending &&
                tourBooked.data?.map((item) => <BookedTourCard item={item} />)
              : data?.map((item) => (
                  <BookedProductCard item={item.product} amount={item.amount} />
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
    marginBottom: 77,
    backgroundColor: 'black',
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
  btnEquipment: {
    width: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    padding: 10,
    borderRadius: 12,
  },
  btnEquipmentActive: {
    borderBottomColor: "#6A5ACD",
  },
});
