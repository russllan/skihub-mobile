import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import { gStyles } from "../../../styles/gStyle";
import { useBases } from "../../hooks/useBases";
import BaseCard from "../../components/basesCard/BasesCard";
import TourCard from "../../components/tourCard/TourCard";
import { useTour } from "../../hooks/useTour";

export default HomePage = () => {
  const { isPending, data } = useBases();
  const {
    isLoading: tourIsLoading,
    isError: tourIsError,
    data: tourData,
  } = useTour();
  return (
    <ScrollView style={gStyles.screen}>
      <View style={styles.top}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1609952769887-7905b6b02c0f?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHx8MA%3D%3D",
          }}
          style={{ width: "100%", height: 300 }}
          borderRadius={10}
          blurRadius={0.8}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: 50,
              position: "absolute",
              bottom: 90,
              opacity: 0.9,
            }}
          >
            <TextInput
              placeholder="Введите для поиска"
              maxLength={15}
              style={gStyles.textInput}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        <View style={gStyles.container}>
          <Text style={gStyles.titleText}>Горнолыжные базы</Text>
          {isPending ? (
            <Text>...Loading</Text>
          ) : (
            <FlatList
              data={data}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <BaseCard data={item} />}
            />
          )}
          <View style={styles.tourView}>
            <Text style={gStyles.titleText}>Туры</Text>
            {tourIsError && <Text>Ошибка при получении туров</Text>}
            {tourIsLoading ? (
              <Text>...Загрузка</Text>
            ) : (
              tourData && (
                <FlatList
                  data={tourData}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => <TourCard tour={item} />}
                />
              )
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: "25%",
  },
  bottom: {
    width: "100%",
    height: "100%",
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#fff",
    position: "relative",
  },
  container: {
    width: "100%",
    display: "flex",
  },
  wrapper: {},
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  tourView: {
    width: "100%",
    display: "flex",
    gap: 18,
  },
});
