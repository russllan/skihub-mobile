import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { gStyles } from "../../../styles/gStyle";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import paymentHistoryService from "../../services/paymentHistory.service";
import { useNavigation } from "@react-navigation/native";

export default function PaymentHistoryPage() {
  const { data, isPending } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => await paymentHistoryService.getMyPayHistory(),
  });
  if (!isPending) {
    console.log(data);
  }
  const {navigate} = useNavigation();
  return (
    <View style={styles.viewHistory}>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity style={[gStyles.btnNew, gStyles.btnPlace]} onPress={() => navigate('Root', {screen: 'Профиль'})}>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Вернуться
            </Text>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          {isPending ? (
            <Text>...Загрузка истории оплат</Text>
          ) : (
            data?.map((item) => (
              <View style={styles.viewCard}>
                <Text style={styles.text}>
                  Идентификатор платежа: {item?.stripePaymentIntentId}
                </Text>
                <Text style={styles.text}>Сумма платежа: {item?.price / 100}</Text>
                <Text style={styles.text}>Валюта платежа: {item?.currency}</Text>
              </View>
            ))
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewHistory: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    paddingVertical: 60,
    width: "85%",
    alignSelf: "center",
  },
  top: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
  },
  viewCard: {
    width: 300,
    height: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 7,
    borderRadius: 7,
    backgroundColor: '#6A5ACD',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "500"
  },
});
