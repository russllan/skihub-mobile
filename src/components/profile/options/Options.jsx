import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";
import { removeTokenFromLocalStorage } from "../../../hooks/localStorage.helper";
import { useNavigation } from "@react-navigation/native";

export default Options = () => {
  const navigation = useNavigation();
  const logout = () => {
    navigation.navigate("SignIn");
    removeTokenFromLocalStorage();
  };
  return (
    <View style={styles.options}>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.touchView}>
          <Ionicons
            name="moon-sharp"
            size={20}
            color="white"
            style={{ paddingRight: 20 }}
          />
          <Text style={styles.txt}>{"Dark mode"}</Text>
        </View>
        <Entypo name="switch" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("history")}
      >
        <View style={styles.touchView}>
          <EvilIcons
            name="credit-card"
            size={26}
            color="white"
            style={{ paddingRight: 20 }}
          />
          <Text style={styles.txt}>История оплаты</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("userEdit")}
        style={styles.touch}
      >
        <View style={styles.touchView}>
          <FontAwesome5
            name="user"
            size={20}
            color="white"
            style={{ paddingRight: 25 }}
          />
          <Text style={styles.txt}>Данные пользователя</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={logout}>
        <View style={styles.touchView}>
          <Ionicons
            name="settings-outline"
            size={20}
            color="white"
            style={{ paddingRight: 20 }}
          />
          <Text style={styles.txt}>Выйти</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  options: {
    width: "100%",
    height: "100%",
  },
  touch: {
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
  },
  touchView: {
    flexDirection: "row",
  },
  txt: {
    color: "white",
  },
});
