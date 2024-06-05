import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import { gStyles } from "../../../styles/gStyle";
import CustomModal from "../modal/Modal";
import { useOneProduct } from "../../hooks/useProduct";
import { useLikedProduct } from "../../hooks/useBasket";
import { useMutation } from "@tanstack/react-query";
import bookedProductService from "../../services/bookedProduct.service";

export default ProductCard = ({ item }) => {
  const [like, setLike] = useState(item?.isBooked);
  const [active, setActive] = useState(false);
  const { isPending, data } = useOneProduct(item.id);
  const [isLoading, setIsLoading] = useState(false);
  // payment
  const [payKey, setPayKey] = useState("");
  const [isPayment, setIsPayment] = useState(false);
  // payment2

  const bookedProduct = useMutation({
    mutationKey: ["booked-product"],
    mutationFn: async ({ data }) =>
      await bookedProductService.createBookedProduct(data),
  });

  // console.log(bookedProduct.mutateAsync);

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
      startDate: "2024-09-10",
      endDate: "2024-10-12",
      amount: 1,
      product: item?.id,
    };
    try {
      const res = await bookedProduct.mutateAsync({ data });
      if (res) {
        console.log(res);
        setPayKey(res.paymentIntentClientSecret);
        // onCheckout(res.paymentIntentClientSecret)
        setIsLoading(false);
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const onPayment = () => {
    setIsPayment(true);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => setActive(true)}>
      <CustomModal
        isModal={active}
        setModal={setActive}
        height={480}
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
          <View>
            <Text>Количество: {data?.amount} шт.</Text>
          </View>
          <View>
            <Text>Стоимость: {data?.cost}/сом</Text>
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
              <Text>Размер: {data?.size}</Text>
              <Text>Рост: {data?.height}</Text>
              <Text>Вес: {data?.weight}</Text>
              <Text>Цвет: {data?.color}</Text>
              <Text>Пол: {data?.gender}</Text>
            </View>
          )}
          <View>
            <Text>{data?.text}</Text>
          </View>
          <View>
            <Text>Статус: {data?.status}</Text>
          </View>
          <TouchableOpacity style={gStyles.btn} onPress={onBookProduct}>
            <Text>{isLoading ? "Загрузка..." : "Забронировать"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={gStyles.btn} onPress={onPayment}>
            <Text>{"Оплатить"}</Text>
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
});
