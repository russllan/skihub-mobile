import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import { gStyles } from "../../../styles/gStyle";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../modal/Modal";
import { useOneProduct } from "../../hooks/useProduct";

export default ProductCard = ({ item }) => {
  const [like, setLike] = useState(false);
  const [active, setActive] = useState(false);
  const { isPending, data } = useOneProduct(item.id);
  const navigation = useNavigation();
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
          {/* <View>
            <Text>База: {data?.base}</Text>
          </View> */}
          <View>
            <Text>{data?.text}</Text>
          </View>
          <View>
            <Text>Статус: {data?.status}</Text>
          </View>
          <TouchableOpacity style={gStyles.btn}>
            <Text>Забронировать</Text>
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
            size={30}
            color="#C05E2B"
            style={styles.heart}
            onPress={() => setLike(false)}
          />
        ) : (
          <EvilIcons
            name="heart"
            size={30}
            color="black"
            style={styles.heart}
            onPress={() => setLike(true)}
          />
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.viewContent}>
          <Text style={styles.hText}>{item?.title}</Text>
          <Text>{item?.amount} — кол-во</Text>
        </View>
        <View style={styles.viewContent}>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons name="location" size={24} color="black" />
            <Text style={gStyles.opacityText}>{item?.base.title}</Text>
          </View>
          <Text style={gStyles.orangeText}>
            {item?.cost}
            <Text style={{ color: "black", fontWeight: "300" }}>/сом</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: 290,
  },
  productDetail: {
    flex: 1,
    flexDirection: "column",
    gap: 25,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  heart: {
    position: "absolute",
    top: 15,
    left: 177,
  },
  content: {
    width: "100%",
    paddingVertical: 10,
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
  },
});
