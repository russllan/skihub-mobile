import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import IconTextInput from "../../components/InputIcon/InputIcon";
import { useNavigation } from "@react-navigation/native";

export default function PaymentFormPage() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.viewPayment}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Добавьте свою информацию</Text>
        </View>
        <View>
          <Text style={styles.text}>Информация о карте</Text>
          <IconTextInput
            style={styles.input}
            placeholder="1234 5678 9123 4567"
            icon={"creditcard"}
          />
          <View style={{ flexDirection: "row", gap: 5 }}>
            <IconTextInput
              style={styles.inputSmall}
              placeholder="MM/YY"
              icon={"calendar"}
            />
            <IconTextInput
              style={styles.inputSmall}
              placeholder="CVC"
              icon={"creditcard"}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>Платежный адрес</Text>
          <TextInput style={styles.input} placeholder="kgs"  placeholderTextColor="#fff"/>
          <TextInput style={styles.input} placeholder="ZIP code"  placeholderTextColor="#fff" />
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigate("thanks")}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Оплатить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPayment: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    width: "90%",
    height: "90%",
    alignSelf: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 20,
  },
  input: {
    width: "100%",
    paddingVertical: 15,
    padding: 7,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    marginVertical: 5,
    color: 'white'
  },
  inputSmall: {
    width: "48%",
    borderWidth: 1,
    padding: 7,
    borderBlockColor: "#FFFAFA",
    borderRadius: 5,
    paddingVertical: 15,
  },
  btn: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#0000CD",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "white",
  },
  text: {
    fontSize: 14,
    opacity: 0.5,
    color: "white",
  },
});
