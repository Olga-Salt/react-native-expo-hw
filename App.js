import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { useRuote } from "./router";

// import PostsScreen from "./Screens/auth/mainScreen/Postscreen";
// import CreateScreen from "./Screens/auth/mainScreen/CreateScreen";
// import ProfileScreen from "./Screens/auth/mainScreen/ProfileScreen";
// import { RegistrationScreen, LoginScreen } from "./Screens/auth";

// const MainTab = createBottomTabNavigator();
// const authStack = createStackNavigator();

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Midium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleRegistrationSubmit = (data) => {
    console.log("data", data);
  };
  const handleLoginSubmit = (data) => {
    console.log("data", data);
  };

  const routing = useRuote(
    {},
    onLayoutRootView,
    handleLoginSubmit,
    handleRegistrationSubmit
  );

  return (
    <NavigationContainer>
      {routing}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// ==== первая версия
// <TouchableWithoutFeedback onPress={keyBoardHide}>
//   <View style={styles.container} onLayout={onLayoutRootView}>
//     <ImageBackground
//       style={styles.image}
//       source={require("./assets/PhotoBG.jpg")}
//     >
//       <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
//         {/* <Text>Welcome to App</Text> */}
//         {/* <LoginScreen
//           control1={control1}
//           handleSubmit1={handleSubmit1}
//           onSubmit1={onSubmit1}
//           isShowKeyBoard={isShowKeyBoard}
//           setIsShowKeyBoard={setIsShowKeyBoard}
//           keyBoardHide={keyBoardHide}
//           errors1={errors1}
//           dimensions={dimensions}
//         /> */}
//         <RegistrationScreen
//           control={control}
//           handleSubmit={handleSubmit}
//           onSubmit={onSubmit}
//           isShowKeyBoard={isShowKeyBoard}
//           setIsShowKeyBoard={setIsShowKeyBoard}
//           keyBoardHide={keyBoardHide}
//           errors={errors}
//           dimensions={dimensions}
//         />
//         <StatusBar style="auto" />
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   </View>
// </TouchableWithoutFeedback>

// ===
