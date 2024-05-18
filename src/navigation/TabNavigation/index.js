import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomePage from "../../screens/Home/HomePage";
import SignUp from "../../screens/SignUp";
import Equipment from "../../screens/equipment/Index";
import Basket from "../../screens/basket/Index";
import Profile from "../../screens/profile/Index";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyles,
          tabBarActiveTintColor: '#C05E2B',
        }}
      >
        <Tab.Screen
          name="Главная"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#C05E2B" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Снаряжение"
          component={Equipment}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="skiing"
                size={24}
                color={focused ? "#C05E2B" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Корзина"
          component={Basket}
          options={{
            tabBarIcon: ({ focused }) => (
              <Fontisto
                name="heart-alt"
                size={24}
                color={focused ? "#C05E2B" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Профиль"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user"
                size={24}
                color={focused ? "#C05E2B" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export const styles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: "black",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    height: 80,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: "absolute",
    borderTopColor: "#222",
    paddingTop: 5,
    paddingBottom: 10,
    zIndex: 0,
  },
});
