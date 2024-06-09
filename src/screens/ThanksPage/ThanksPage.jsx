import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gStyles } from "../../../styles/gStyle";
import { useNavigation } from "@react-navigation/native";

export default function ThanksPage() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.viewPage}>
      <View style={styles.container}>
        <View>
          <AntDesign
            style={styles.icon}
            name="checkcircleo"
            size={120}
            color="greeb"
          />
        </View>
        <View>
          <Text style={styles.text}>Платеж успешно отправлен!</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[gStyles.btnNew, gStyles.btnPlace]}
            onPress={() => navigate("Root", { screen: "Профиль" })}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Вернуться
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    opacity: 0.8,
  },
  icon: {
    width: "85%",
    alignSelf: "center",
    paddingBottom: 20,
  },
});
