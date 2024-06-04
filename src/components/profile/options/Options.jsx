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
            color="black"
            style={{ paddingRight: 20 }}
          />
          <Text>{"Dark mode"}</Text>
        </View>
        <Entypo name="switch" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.touchView}>
          <EvilIcons
            name="credit-card"
            size={26}
            color="black"
            style={{ paddingRight: 20 }}
          />
          <Text>Карта</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("userEdit")}
        style={styles.touch}
      >
        <View style={styles.touchView}>
          <FontAwesome5
            name="user"
            size={20}
            color="black"
            style={{ paddingRight: 25 }}
          />
          <Text>Данные пользователя</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={logout}>
        <View style={styles.touchView}>
          <Ionicons
            name="settings-outline"
            size={20}
            color="black"
            style={{ paddingRight: 20 }}
          />
          <Text>Выйти</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
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
});
