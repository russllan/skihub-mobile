import { View, TextInput, StyleSheet, Text } from "react-native";

export default UserEditPage = () => {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text>awdawd</Text>
        <TextInput placeholder="Изменить имя" value />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: 40,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "95%",
    height: "100%",
  },
});
