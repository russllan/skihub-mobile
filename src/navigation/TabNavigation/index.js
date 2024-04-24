import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomePage from "../../screens/Home/HomePage";
import SignUp from "../../screens/SignUp";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyles,
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Settings" component={SignUp} />
      </Tab.Navigator>
    </>
  );
}

export const styles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: "#222",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    height: 103,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: "absolute",
    borderTopColor: "#222",
    paddingTop: 20,
    zIndex: 0,
  },
});
