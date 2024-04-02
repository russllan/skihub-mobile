import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <ImageBackground
        style={{ width: "100%", height: "100%" }}
          src="https://images.unsplash.com/photo-1614270270735-e93b1234fc7c?w=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHNraXxlbnwwfHwwfHx8MA%3D%3D"
        >
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
});
