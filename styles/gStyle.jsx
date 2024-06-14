import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
  ViewBackColor: {
    backgroundColor: "black"
  },
  screen: {
    width: "100%", 
    height: "100%",
    marginBottom: 60,
    backgroundColor: "black"
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
    backgroundColor: '#6A5ACD	',
    padding: 15,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10
  },
  orangeText: {
    fontSize: 20,
    color: "#C05E2B",
    fontWeight: "900",
  },
  opacityText: {
    opacity: 0.4,
    color: '#fff',
  },
  btnNew: {
    width: 200,
    paddingVertical: 15,
    backgroundColor: "#6A5ACD",
    borderRadius: 5,
  },
  btnPlace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
