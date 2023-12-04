import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

import PostsScreen from "./Screens/auth/mainScreen/Postscreen";
import CreateScreen from "./Screens/auth/mainScreen/CreateScreen";
import ProfileScreen from "./Screens/auth/mainScreen/ProfileScreen";
import { RegistrationScreen, LoginScreen } from "./Screens/auth";

const MainTab = createBottomTabNavigator();
const authStack = createStackNavigator();

export const useRuote = (
  isAuth,
  onLayoutRootView,
  handleLoginSubmit,
  handleRegistrationSubmit
) => {
  if (!isAuth) {
    return (
      <authStack.Navigator>
        <authStack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <LoginScreen
              {...props}
              onLayoutRootView={onLayoutRootView}
              handleLoginSubmit={handleLoginSubmit}
            />
          )}
        </authStack.Screen>
        <authStack.Screen
          name="Registration"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <RegistrationScreen
              {...props}
              onLayoutRootView={onLayoutRootView}
              handleRegistrationSubmit={handleRegistrationSubmit}
            />
          )}
        </authStack.Screen>
      </authStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 83 },
      }}
    >
      <MainTab.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Создать публикацию"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="plus"
              size={size}
              color="#fff"
              style={{
                backgroundColor: "#FF6C00",
                borderRadius: 20,
                height: 40,
                width: 70,
                textAlign: "center",
                padding: 7,
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
