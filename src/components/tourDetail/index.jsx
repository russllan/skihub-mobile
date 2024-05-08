import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowLeft from "../arrowLeft/ArrowLeft";
import { useNavigation } from "@react-navigation/native";

export default TourDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.viewArrow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Root", { screen: "Profile" })}
        >
          <ArrowLeft name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", paddingVertical: 50 }}>
        <Image
          style={{ width: 360, height: 400 }}
          source={{
            uri: "https://images.unsplash.com/photo-1606159515982-6797651236fd?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXIlMjBza2l8ZW58MHx8MHx8fDA%3D",
          }}
        />
      </View>
      <View>
        <View style={styles.top}></View>
        <View style={styles.middle}></View>
        <View style={styles.bottom}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  viewArrow: {
    width: "100%",
    height: 30,
  },
  tourDetail: {
    width: "80%",
  },
  top: {
    width: '100%',
    height: 100,
    borderBottomColor: 'silver',
    borderWidth: 1,
  },
  middle: {

  },
  bottom: {},
});
