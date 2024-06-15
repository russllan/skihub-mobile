import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import { gStyles } from "../../../styles/gStyle";
import CustomModal from "../modal/Modal";
import { useOneProduct } from "../../hooks/useProduct";
import { useLikedProduct } from "../../hooks/useBasket";
import { useMutation } from "@tanstack/react-query";
import bookedProductService from "../../services/bookedProduct.service";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";

export default ProductCard = ({ item }) => {
  const [like, setLike] = useState(item?.isBooked);
  const [active, setActive] = useState(false);
  const { isPending, data } = useOneProduct(item.id);
  const [amount, setAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  //
  const { navigate } = useNavigation();
  // datePicker
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const bookedProduct = useMutation({
    mutationKey: ["booked-product"],
    mutationFn: async ({ data }) =>
      await bookedProductService.createBookedProduct(data),
  });

  const { mutateAsync } = useLikedProduct();

  const addBasket = async () => {
    const newData = {
      isBooked: true,
    };
    const exist = await mutateAsync({
      id: item?.id,
      data: newData,
    });
    if (exist) {
      setLike(true);
    }
  };

  const removeBasket = async () => {
    const newData = {
      isBooked: false,
    };
    const exist = await mutateAsync({
      id: item?.id,
      data: newData,
    });
    if (exist) {
      setLike(false);
    }
  };

  const onBookProduct = async () => {
    setIsLoading(true);
    const data = {
      isRefund: false,
      startDate: startDate,
      endDate: endDate,
      amount: amount,
      product: item?.id,
    };
    try {
      const res = await bookedProduct.mutateAsync({ data });
      if (res) {
        console.log(res);
        navigate("payment");
        setIsLoading(false);
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const handleStartDateChange = (day) => {
    setStartDate(day.dateString);
    setShowStartCalendar(false);
    if (endDate && day.dateString > endDate) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (day) => {
    setEndDate(day.dateString);
    setShowEndCalendar(false);
  };

  if (data == undefined) return <Text>Loading...</Text>;
  else {
    return (
      <TouchableOpacity style={styles.card} onPress={() => setActive(true)}>
        <CustomModal
          isModal={active}
          setModal={setActive}
          height={660}
          width={320}
        >
          <View style={styles.productDetail}>
            {isPending && <Text>...Loading</Text>}
            <View>
              <Image
                source={{ uri: data?.image }}
                style={{ width: 300, height: 100 }}
              />
            </View>
            <View>
              <Text>Название: {data?.title}</Text>
            </View>
            <View style={styles.viewAmount}>
              <TouchableOpacity
                style={styles.btnAmount}
                onPress={() => setAmount((prev) => prev - 1)}
              >
                <Text style={{ textAlign: "center" }}>—</Text>
              </TouchableOpacity>
              <Text>Количество: {amount} шт.</Text>
              <TouchableOpacity
                style={styles.btnAmount}
                onPress={() => setAmount((prev) => prev + 1)}
              >
                <Text style={{ textAlign: "center" }}>+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>Стоимость: {data?.cost * amount}/сом</Text>
            </View>
            {data?.type === "Одежда" && (
              <View
                style={{
                  gap: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {data?.size ? <Text>Размер: {data?.size}</Text> : null}
                {data?.height ? <Text>Рост: {data?.height}</Text> : null}
                {data?.weight ? <Text>Вес: {data?.weight}</Text> : null}
                {data?.color ? <Text>Цвет: {data?.color}</Text> : null}
                {data?.gender ? <Text>Пол: {data?.gender}</Text> : null}
              </View>
            )}
            <View>
              <Text>{data?.text}</Text>
            </View>
            <View>
              <Text>Статус: {data?.status}</Text>
            </View>
            {/*DATA VIEW 1*/}
            <Text style={styles.title}>Выберите даты бронирования</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowStartCalendar(true)}
            >
              <Text style={styles.buttonText}>
                Дата начала брони: {startDate || "не выбрана"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowEndCalendar(true)}
            >
              <Text style={styles.buttonText}>
                Дата окончания брони: {endDate || "не выбрана"}
              </Text>
            </TouchableOpacity>

            <Modal
              visible={showStartCalendar}
              transparent={true}
              animationType="slide"
            >
              <View style={styles.modalContainer}>
                <Calendar
                  onDayPress={handleStartDateChange}
                  markedDates={{
                    [startDate]: {
                      selected: true,
                      marked: true,
                      selectedColor: "blue",
                    },
                  }}
                />
                <Button
                  title="Закрыть"
                  onPress={() => setShowStartCalendar(false)}
                />
              </View>
            </Modal>

            <Modal
              visible={showEndCalendar}
              transparent={true}
              animationType="slide"
            >
              <View style={styles.modalContainer}>
                <Calendar
                  onDayPress={handleEndDateChange}
                  minDate={startDate || undefined} // Ограничение на минимальную дату (дата начала брони)
                  markedDates={{
                    [endDate]: {
                      selected: true,
                      marked: true,
                      selectedColor: "blue",
                    },
                  }}
                />
                <Button
                  title="Закрыть"
                  onPress={() => setShowEndCalendar(false)}
                />
              </View>
            </Modal>
            {""}
            <TouchableOpacity
              style={[gStyles.btnNew, { alignSelf: "center" }]}
              onPress={onBookProduct}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                {isLoading ? "Загрузка..." : "Забронировать"}
              </Text>
            </TouchableOpacity>
          </View>
        </CustomModal>
        <View>
          <Image
            source={{
              uri:
                item.image === "string"
                  ? "https://images.unsplash.com/photo-1513908512605-c58d3f08079f?w=720&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vd2JvYXJkJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                  : item.image,
            }}
            style={styles.img}
          />
          {like ? (
            <EvilIcons
              name="heart"
              size={40}
              color="#C05E2B"
              style={styles.heart}
              onPress={removeBasket}
            />
          ) : (
            <EvilIcons
              name="heart"
              size={40}
              color="white"
              style={styles.heart}
              onPress={addBasket}
            />
          )}
        </View>
        <View style={styles.content}>
          <View style={styles.viewContent}>
            <Text style={styles.hText}>{item?.title}</Text>
            <Text style={{ color: "#fff" }}>{item?.amount} — кол-во</Text>
          </View>
          <View style={styles.viewContent}>
            <View style={{ flexDirection: "row" }}>
              <EvilIcons name="location" size={24} color="white" />
              <Text style={gStyles.opacityText}>{item?.base?.title}</Text>
            </View>
            <Text style={gStyles.orangeText}>
              {item?.cost}
              <Text style={{ color: "#fff", fontWeight: "300", fontSize: 20 }}>
                /сом
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    width: 340, //210
    height: 330,
    borderRadius: 10,
    backgroundColor: "#6A5ACD",
  },
  productDetail: {
    flex: 1,
    flexDirection: "column",
    gap: 25,
  },
  img: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  heart: {
    position: "absolute",
    top: 15,
    right: 20,
  },
  content: {
    width: "100%",
    flexDirection: "column",
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 7,
  },
  viewContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  hText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
  },
  btnAmount: {
    backgroundColor: "#6A5ACD",
    padding: 5,
    borderRadius: 100,
    paddingHorizontal: 35,
    marginVertical: 7,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#6A5ACD",
    opacity: 0.5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  viewAmount: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
});
