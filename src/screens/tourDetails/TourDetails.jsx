import { useRoute } from "@react-navigation/native";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useOneTour } from "../../hooks/useTour";
import TourDetail from "../../components/tourDetail";

export default TourDetails = () => {
  const route = useRoute();
  const tourId = route.params;
  const { isPending, data } = useOneTour(tourId);

  data ? console.log(data) : "";
  if(isPending) {
    <Text>...Loading</Text>
  }
  return (
    <View style={styles.tour}>
      <View style={styles.top}>
        <TourDetail data={data}/>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  tour: {
    flex: 1,
    backgroundColor: 'black'
  },
  top: {},
  bottom: {},
});
