import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import reviewService from "../../services/review.service";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function FormReview() {
  const route = useRoute();
  const { bs } = route.params;
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  console.log(bs);

  const { mutateAsync } = useMutation({
    mutationKey: ["review-create"],
    mutationFn: async (data) => await reviewService.createReview(data),
  });

  const onsubmit = async () => {
    if (comment.trim() === "") {
      alert("Комментарий не может быть пустым");
      return;
    }

    const data = {
      rating: parseInt(rating, 10), // Преобразование строки в число
      comment: comment,
      base: parseInt(bs, 10),
    };

    console.log("Submitting data:", data);

    try {
      const res = await mutateAsync(data);
      if (res) {
        setIsCheck(true);
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.viewForm}>
      <View>
        <Text style={styles.label}>Введите рейтинг</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setRating(parseInt(text, 10) || 0)}
          keyboardType="numeric" // Установка клавиатуры для ввода чисел
        />
      </View>
      <View>
        <Text style={styles.label}>Оставьте комментарий</Text>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />
      </View>
      <View>
        {!isCheck ? (
          <TouchableOpacity style={styles.btn} onPress={onsubmit}>
            <Text>Отправить</Text>
          </TouchableOpacity>
        ) : (
          <Text>Отзыв отправлен!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    flex: 1,
    paddingVertical: 70,
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  input: {
    padding: 10,
    width: 350,
    borderRadius: 10,
    borderColor: "silver",
    borderWidth: 1,
  },
  label: {
    fontSize: 17,
    fontWeight: "700",
  },
  btn: {
    backgroundColor: "#6A5ACD",
    paddingHorizontal: 22,
    padding: 10,
    borderRadius: 7,
  },
});
