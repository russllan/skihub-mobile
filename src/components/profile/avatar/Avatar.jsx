import { View, Text, StyleSheet, Image } from "react-native";
import { gStyles } from "../../../../styles/gStyle";

export default function Avatar({ data, isPending }) {
  return (
    <View style={styles.avatar}>
      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1711572322915-0106714be1af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNraSUyMGRhcmt8ZW58MHx8MHx8fDA%3D",
        }}
        style={styles.img}
      />
      <View style={styles.viewTitle}>
        <View style={styles.wrapperPhone}>
          <View>
            <Text style={{ color: "white" }}>Phone</Text>
          </View>
          <View>
            <Text style={gStyles.opacityText}>
              {isPending ? <Text>...Загрузка</Text> : data?.phoneNumber}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  wrapperImg: {
    width: 195,
    height: 195,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  img: {
    padding: 10,
    width: 180,
    height: 180,
    width: 400,
    height: 200,
    borderRadius: 20,
  },
  viewTitle: {
    width: 300,
    paddingVertical: 20,
    alignItems: "center",
  },
  wrapperPhone: {
    width: "100%",
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
