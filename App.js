import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StripeProvider } from "@stripe/stripe-react-native";
import { gStyles } from "./styles/gStyle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const PUBLISHABLE_KEY =
  "pk_test_51PMkfuBW0LwhajamdUs4Ih8OBBuqDXta6FmWUSfllgbf3qjNOWU6JIHi4cX3kVAkwsj7CRAkDluRYHJJ2aDKmnok00eHJPLw9B";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="transparent"
          hidden={false}
          translucent={true}
        />
        <NavigationContainer>
          {/* <StripeProvider publishableKey={PUBLISHABLE_KEY}> */}
            <StackNavigator />
          {/* </StripeProvider> */}
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
