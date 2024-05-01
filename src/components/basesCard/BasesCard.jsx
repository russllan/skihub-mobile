import { StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import baseService from "../../services/base.service";
import { base_URL } from "../../services";
import { useBases } from "../../hooks/useBases";

export default BasesCard = () => {
    const {isPending, data} = useBases();

  if (isPending) return <Text>...Loading</Text>;
//   if (data) {
//     console.log(data);
//     return (<Text>DATA!!!!!!!!!!!!!!!!!!!!!!!!</Text>)
//   }
  console.log(data);

  return (
    <View className={styles.basesCard}>
      <View className={styles.Card}>
        <View>
          <Text>{data[0].address}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basesCard: {
    flex: 1,
    backgroundColor: "red",
  },
});
