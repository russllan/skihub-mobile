import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigation";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import BaseDetails from "../screens/baseDetails/BaseDetails";
import TourDetails from "../screens/tourDetails/TourDetails";
import UserEditPage from "../screens/userEdit/UserEditPage";
import EquipmentBasePage from "../screens/equipmentBase/EquipmentBasePage"

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerBackground: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="baseDetails"
        component={BaseDetails}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="tourDetails"
        component={TourDetails}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="userEdit"
        component={UserEditPage}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="equipmentBase"
        component={EquipmentBasePage}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <Stack.Screen
        name="Root"
        component={TabNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={TabNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
