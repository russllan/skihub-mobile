import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  screen: {
    width: "100%", 
    height: "100%",
    marginBottom: 60,
  },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  textInput: {
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#222',
    backgroundColor: "silver",
  },
  btn: {
    backgroundColor: 'silver',
    padding: 15,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10
  }
});
