import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ArrowLeft from "../arrowLeft/ArrowLeft";
import Modal from "../modal/Modal";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import tourBookedService from "../../services/tourBooked.service";

export default TourDetail = ({ data }) => {
  const { navigate } = useNavigation();
  const [modal, setModal] = useState(false);

  const { mutateAsync } = useMutation({
    mutationKey: ["bookedTour-create"],
    mutationFn: async (data) => await tourBookedService.create(data),
  });

  const paymentTour = async () => {
    const frontData = {
      isCancel: true,
      tour: Number(data?.id),
    };
    console.log("Sending data:", frontData);
    try {
      const res = await mutateAsync(frontData);
      if (res) {
        navigate("payment");
        console.log(res);
      }
    } catch (error) {
      console.error(
        "Error booking tour:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.viewArrow}>
        <TouchableOpacity
          onPress={() => navigate("Root", { screen: "Profile" })}
        >
          <ArrowLeft name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ height: 450, alignItems: "center", paddingVertical: 50 }}>
        <Image
          style={{ width: 360, height: 400, borderRadius: 20 }}
          source={{
            uri: "https://images.unsplash.com/photo-1606159515982-6797651236fd?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXIlMjBza2l8ZW58MHx8MHx8fDA%3D",
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.top}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 60, marginTop: 25 }}
            source={{
              uri: "https://images.unsplash.com/photo-1606159515982-6797651236fd?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvdXIlMjBza2l8ZW58MHx8MHx8fDA%3D",
            }}
          />
        </View>
        <View style={styles.middle}>
          <View>
            <View>
              <Text style={styles.mainText}>{data?.title}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons
                name="location"
                size={24}
                color="black"
                style={{ verticalAlign: "bottom" }}
              />
              <Text style={styles.smallText}>{data?.location}</Text>
            </View>
          </View>
          <View>
            <Text>{data?.cost}</Text>
            <Text style={{ paddingTop: 5 }}>{data?.status}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.mainText}>Описание</Text>
          <Text style={styles.smallText}>
            {data?.text}
            awkjdhakwjdhkjawdhkjawdhjka awldjalkwdjalwkdjawlkjdlkawjd
            lawkjdlkawdjlwakjdlkawjdlkawd ;thk;yfhkyg;lkhg;lhk;ylkh;l;lkhg
            dlgkjdlkfjgdlfkjgkldfjgljglkdfjgdlfkgj
            dflkgjdlfkgjldrjgldrihgklsdhgslkdgjlsegj
            sdlkgjsldkjflskjeflsjflsjelfjselkfjselkjfsel
            sefjse;lfselkfjselkfjslekjflskejflkesjflksejf
            sefkkjdawkjdhawkhdawkdj
          </Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btnText}
            onPress={() => setModal(true)}
          >
            <Text style={styles.text}>
              ${data?.cost}
              <Text style={{ fontWeight: "100" }}>/person</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={paymentTour}>
            <Text style={{ color: "#fff" }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal isModal={modal} setModal={setModal}>
        <Text>Hello modal!</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  viewArrow: {
    width: "100%",
    height: 30,
  },
  tourDetail: {
    width: "80%",
  },
  top: {
    width: "90%",
    alignSelf: "center",
    height: 120,
    borderBottomColor: "silver",
    borderBottomWidth: 1,
  },
  middle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,
    padding: 20,
  },
  mainText: {
    fontSize: 25,
    fontWeight: "900",
  },
  smallText: {
    opacity: 0.5,
    paddingTop: 10,
  },
  bottom: {
    width: "100%",
    height: 300,
    paddingVertical: 10,
    padding: 20,
  },
  btnView: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0, // Фиксация футера снизу
    left: 0,
    right: 0,
    zIndex: 1, // Установка z-index для правильного отображения
  },
  btn: {
    backgroundColor: "#C05E2B",
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 40,
  },
  btnText: {
    borderWidth: 1,
    borderColor: "#C05E2B",
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    color: "#C05E2B",
    fontWeight: "900",
  },
});
