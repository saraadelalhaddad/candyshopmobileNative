import BakeryDetail from "./components/BakeryDetail";
import BakeryList from "./components/BakeryList";
import CartButton from "./components/buttons/CartButton";
import CartList from "./components/CartList";
// Components
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#90d4ed",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="BakeryList"
          component={BakeryList}
          options={{
            title: "Choose a Bakery",
            headerRiight: () => <CartButton />,
          }}
        />
        <Screen
          name="BakeryDetail"
          component={BakeryDetail}
          options={({ route }) => {
            const { bakery } = route.params;
            return {
              title: bakery.name,
              headerRight: () => <CartButton />,
            };
          }}
        />
        <Screen name="Cart" component={CartList} />
        <Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
