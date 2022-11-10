// import { useState, useEffect, useCallback, useRef } from 'react'
// import { NavigationContainer, StackActions } from '@react-navigation/native'
// import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
// import NumberVerfication from './screens/onBoarding/NumberVerfication';
// import OTPScreen from './screens/onBoarding/OTPScreen';
// import PermissionScreen from './screens/onBoarding/PermissionScreen'
// import AddressScreen from './screens/onBoarding/AdressScreen';
// import WelcomeScreen from './screens/onBoarding/welcomeScreen';
// import { Provider } from 'react-redux';
// import store from './store/index';
// import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { Dosis_400Regular, Dosis_700Bold, Dosis_800ExtraBold, Dosis_500Medium, Dosis_600SemiBold } from '@expo-google-fonts/dosis'
// import Explore from './screens/subscription/Explore';
// import Category from './screens/subscription/Category';
// import SubscriptionData from './screens/subscription/SubscriptionData';
// import { Colors } from './Constants/Color';
// import Menu from './screens/Menu/Menu'
// import ScreenSwitcher from 'react-native-device-screen-switcher';
// import { LogBox } from "react-native";
// import TodaysMenucard from './components/util/Cards/TodaysMenucard';
// import TodaysMenu from './screens/Menu/TodaysMenu';
// import Addons from './screens/Addons/Addons';
// import Addon from './screens/Addons/Addon';
// import AddonsMain from './screens/Addons/AddonsMain';
// import Cart from './screens/Addons/Cart';
// import SubDuration from './screens/SubscriptionDuration/SubDuration';
// import Finalize from './screens/Finalize/Finalize';
// import SS from './screens/subscription/SS';
// import Payment from './screens/Payment/Payment';
// import SubscriptionActive from './screens/SubscriptionActive/SubscriptionActive';


// LogBox.ignoreLogs([
//   "exported from 'deprecated-react-native-prop-types'.",
// ])
// const Stack = createStackNavigator();

// export default function App() {

//   const ref = useRef()
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Keep the splash screen visible while we fetch resources
//         await SplashScreen.preventAutoHideAsync();

//         // // Pre-load fonts, make any API calls you need to do here
//         // await Font.loadAsync({ Dosis_400Regular, Dosis_700Bold, Dosis_800ExtraBold,Dosis_200ExtraLight,Dosis_500Medium,Dosis_600SemiBold, });

//         await Font.loadAsync({ Regular: Dosis_500Medium, Bold: Dosis_600SemiBold, ExtraBold: Dosis_700Bold, });


//         await new Promise(resolve => setTimeout(resolve, 10));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//         await SplashScreen.hideAsync();
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     // <ScreenSwitcher >
//     <Provider store={store} style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       <NavigationContainer >
//         <Stack.Navigator
//           screenOptions={{
//             headerStyle: { elevation: 0 },
//             headerTintColor: Colors.grey100,
//             cardStyle: { backgroundColor: '#fff' }
//           }}>
//           <Stack.Screen

//             name="welcome"
//             component={WelcomeScreen}
//             // component={Menu}
//             // component={TodaysMenu}
//             // component={Explore}
//             // component={AddonsMain}
//             // component={SubDuration}
//             // component={Payment}
//             // component={SubscriptionActive}
//             // component={Finalize}
//             options={{
//               title: "",
//               headerShown: false,
//             }}
//           />
//           <Stack.Screen
//             name="numberVerification"
//             component={NumberVerfication}
//             options={{
//               title: ""
//               // headerShown:false
//             }}
//           />
//           <Stack.Screen
//             name="otpScreen"
//             component={OTPScreen}
//             options={{
//               title: ""
//               // headerShown: false
//             }}
//           />
//           <Stack.Screen
//             name="permissionScreen"
//             component={PermissionScreen}
//             options={{
//               headerShown: false
//             }}
//           />
//           <Stack.Screen
//             name="addressScreen"
//             component={AddressScreen}
//             options={{
//               headerShown: false,
//               title: ""
//             }}
//           />
//           <Stack.Screen
//             name="category"
//             component={Category}
//             options={{
//               headerShown: false,
//               title: ""
//             }}
//           />
//           <Stack.Screen
//             name="menu"
//             component={Menu}
//             options={{
//               headerShown: false,
//               title: "",
//             }}

//           />
//           <Stack.Screen
//             name="subscription"
//             component={SubscriptionData}

//             options={{
//               headerShown: false,
//               // title: "Setup Meals",
//               headerStyle: {
//                 backgroundColor: Colors.yellow100,
//               },
//               headerTitleStyle: { fontFamily: "Bold" },
//               cardStyleInterpolator:
//                 CardStyleInterpolators.forVerticalIOS,
//             }}
//           />
//           <Stack.Screen
//             name="explore"
//             component={Explore}
//             options={{
//               headerShown: false,
//               // title: "",
//             }}

//           />
//           <Stack.Screen
//             name="finalize"
//             component={Finalize}
//             options={{
//               headerShown: false,
//             }}

//           />
//           <Stack.Screen
//             name="subDuration"
//             component={SubDuration}
//             options={{
//               headerShown: false,
//               title: "",
//             }}

//           />
//           {/* <Stack.Screen
//             name="homeScreen"
//             component={HomeScreen}
//             options={{
//               headerShown: false,
//               title: "",
//             }}

//           /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//     //  </ScreenSwitcher>
//   );
// }

import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import ScreenSwitcher from 'react-native-device-screen-switcher';
import { NavigationContainer } from '@react-navigation/native'
import store from './store/index'
import HomeScreen from './screens/HomeScreen'
import { Colors } from './Constants/Color'

const App = () => {

  return (
    // <ScreenSwitcher>
    <Provider store={store} style={{ flex: 1, }} >
      <NavigationContainer >
      <StatusBar
        backgroundColor={"transparent"}
        barStyle="dark-content"
        translucent={true}
      />
        <HomeScreen />
      </NavigationContainer>
    </Provider>
    // </ScreenSwitcher>
  )
}

export default App

const styles = StyleSheet.create({})

