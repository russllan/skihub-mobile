import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

export default ArrowLeft = (data) => {
  return (
    <View>
      <AntDesign
        name={data.name}
        size={data.size}
        color={data.color}
        style={{ paddingHorizontal: 15, top: 30 }}
      />
    </View>
  );
};
