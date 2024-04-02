import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigation";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="EnterFirst">
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
