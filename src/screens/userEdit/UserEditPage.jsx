import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useUserProfile } from "../../hooks/useUser";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default UserEditPage = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  const { data, isPending } = useUserProfile();
  if (!isPending) {
    console.log(data);
  }
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setIsPhone(!isPhone)}
        >
          <View style={styles.touchView}>
            <Text>{data?.phoneNumber}</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
        </TouchableOpacity>
        {isPhone && (
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              placeholder="Измените номер телефона"
              onChangeText={setPhone}
              value={phone}
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setIsPass(!isPass)}
        >
          <View style={styles.touchView}>
            <Text>Изменить пароль</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
        </TouchableOpacity>
        {isPass && (
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              placeholder="Изменить пароль"
              onChange={setPass}
              value={pass}
            />
          </View>
        )}
        <Text>{pass}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: 100,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "85%",
    height: "100%",
    margin: "auto",
  },
  touch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  touchView: {
    flexDirection: "row",
  },
  input: {
    width: 300,
    textAlign: "center",
    borderColor: "#6A5ACD",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  viewInput: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
