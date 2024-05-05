import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { gStyles } from "../../../styles/gStyle";
import { useOneBase } from "../../hooks/useBases";
import BaseDetail from "../../components/baseDetail/BaseDetail";
import { useRoute } from "@react-navigation/native";

export default BaseDetails = () => {
  const route = useRoute();
  const { baseId } = route.params;
  const { isPending, data } = useOneBase(baseId);

  return (
    <View style={styles.container}>
      {isPending ? <Text>...Loading</Text> : <BaseDetail dataBase={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
