import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import TabBar from "./components/TabBar";

import Screen from "../screens/Screen";
import { NavigationContainer } from "@react-navigation/native";

const AppTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        initialRouteName={"home"}
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <AppTab.Screen
          name="Shopping"
          component={Screen}
          options={{
            tabBarLabel: "Shopping",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <AppTab.Screen
          name="NearMe"
          component={Screen}
          options={{
            tabBarLabel: "NearMe",
            tabBarIcon: ({ color }) => (
              <Ionicons name="location-sharp" size={24} color={color} />
            ),
          }}
        />
        <AppTab.Screen
          name="Cart"
          component={Screen}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="shopping-bag" size={24} color={color} />
            ),
          }}
        />
        <AppTab.Screen
          name="Favorites"
          component={Screen}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={24} color={color} />
            ),
          }}
        />
        <AppTab.Screen
          name="Notifications"
          component={Screen}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications" size={24} color={color} />
            ),
          }}
        />
      </AppTab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
