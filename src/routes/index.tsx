import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

import TabBar from "./components/TabBar";

import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";

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
          component={Screen1}
          options={{
            tabBarLabel: "Shopping",
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <AppTab.Screen
          name="NearMe"
          component={Screen2}
          options={{
            tabBarLabel: "NearMe",
            tabBarIcon: ({ color }) => (
              <Ionicons name="location-sharp" size={24} color={color} />
            ),
          }}
        />
        <AppTab.Screen
          name="Favorites"
          component={Screen3}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={24} color={color} />
            ),
          }}
        />
        <AppTab.Screen
          name="Notifications"
          component={Screen4}
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
