import { View, Text, StyleSheet, Image } from "react-native";
import { gStyles } from "../../../../styles/gStyle";

export default function Avatar({ data, isPending }) {
  return (
    <View style={styles.avatar}>
      <View style={styles.wrapperImg}>
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1682091664140-d2a290b563db?w=720&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpfGVufDB8fDB8fHww",
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.viewTitle}>
        <Text style={gStyles.titleText}>Madelynn Griffin</Text>
        <View style={styles.wrapperPhone}>
          <View>
            <Text>Phone</Text>
          </View>
          <View>
            <Text style={gStyles.opacityText}>{isPending ? <Text>...Загрузка</Text> :data?.phoneNumber}</Text>
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
    marginBottom: 45,
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
    borderRadius: 100,
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
