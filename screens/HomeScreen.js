import { useState, useEffect, useCallback, useRef } from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Dosis_700Bold, Dosis_500Medium, Dosis_600SemiBold } from '@expo-google-fonts/dosis'
import { Colors } from '../Constants/Color';
import { LogBox } from "react-native";
import WelcomeScreen from './onBoarding/welcomeScreen';
import Main from './Main';
import Category from './subscription/Category';
import OTPScreen from '../screens/onBoarding/OTPScreen'
import PermissionScreen from '../screens/onBoarding/PermissionScreen'
import AddressScreen from '../screens/onBoarding/AdressScreen'
import Finalize from '../screens/Finalize/Finalize'
import SubDuration from '../screens/SubscriptionDuration/SubDuration'
import Explore from '../screens/subscription/Explore'
import Payment from '../screens/Payment/Payment'
import Cart from './Addons/Cart';
import Menu from './Menu/Menu';
import AccountCreation from './onBoarding/AccountCreation';
import SubscriptionSetup from './subscription/SubscriptionSetup';
import Profile from './User/Profile/Profile';
import Settings from './User/Settings';
import Address from './User/Address';
import { useSelector } from 'react-redux';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
])
const Stack = createStackNavigator();

export default function HomeScreen() {

    const ref = useRef()
    const [user, setUser] = useState("")
    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
        verifyAuth();
    }, []);
    const verifyAuth = () => {
        Auth.currentAuthenticatedUser()
            .then((user) => {
                setUser(user)
                dispatch(userActions.otpAuth({ user: user, session: null }))
            })
            .catch((err) => {
                // console.error(err);
                // setMessage(NOTSIGNIN);
            });
    };
    console.log("user Data : " + user)
    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();

                // // Pre-load fonts, make any API calls you need to do here
                // await Font.loadAsync({ Dosis_400Regular, Dosis_700Bold, Dosis_800ExtraBold,Dosis_200ExtraLight,Dosis_500Medium,Dosis_600SemiBold, });

                await Font.loadAsync({ Regular: Dosis_500Medium, Bold: Dosis_600SemiBold, ExtraBold: Dosis_700Bold, });


                await new Promise(resolve => setTimeout(resolve, 10));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        // <ScreenSwitcher >

        <Stack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0 },
                headerTintColor: Colors.greyBlack,
                cardStyle: { backgroundColor: '#fff' },
                headerBackTitleVisible: false,
                headerBackTitleStyle: { backgroundColor: "black" }
            }}>
            <Stack.Screen
                name="welcome"
                component={user ? Main : WelcomeScreen}

                options={{
                    headerShown: false,
                    // title: "Setup Meals",
                    headerStyle: {
                        backgroundColor: Colors.yellow100,
                    },
                    headerTitleStyle: { fontFamily: "Bold" },
                    cardStyleInterpolator:
                        CardStyleInterpolators.forVerticalIOS,
                }}
            />
              <Stack.Screen
                name="signup"
                component={WelcomeScreen}

                options={{
                    headerShown: false,
                    // title: "Setup Meals",
                    headerStyle: {
                        backgroundColor: Colors.yellow100,
                    },
                    headerTitleStyle: { fontFamily: "Bold" },
                    cardStyleInterpolator:
                        CardStyleInterpolators.forVerticalIOS,
                }}
            />
            <Stack.Screen
                name="numberVerification"
                component={AccountCreation}
                options={{
                    title: ""
                    // headerShown:false
                }}
            />
            <Stack.Screen
                name="otpScreen"
                component={OTPScreen}
                options={{
                    title: ""
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name="permissionScreen"
                component={PermissionScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="addressScreen"
                component={AddressScreen}
                options={{
                    headerShown: false,
                    title: ""
                }}
            />
            <Stack.Screen
                name="category"
                component={Category}
                options={{
                    headerShown: false,
                    title: ""
                }}
            />
            <Stack.Screen
                name="menu"
                component={Menu}
                options={{
                    headerShown: false,
                    title: ""
                }}
            />
            <Stack.Screen
                name="explore"
                component={Explore}
                options={{
                    headerShown: false,
                    title: "",
                }}

            />

            <Stack.Screen
                name="main"
                component={Main}
                options={{
                    headerShown: false,
                    // title: "",
                }}

            />
            <Stack.Screen
                name="finalize"
                component={Finalize}
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="payment"
                component={Payment}
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="subDuration"
                component={SubDuration}
                options={{
                    headerShown: false,
                    title: "",
                }}

            />
            <Stack.Screen
                name="cart"
                component={Cart}
                options={{
                    headerShown: false,
                    title: "",
                }}

            />
            <Stack.Screen
                name="subscriptionSetup"
                component={SubscriptionSetup}

                options={{
                    headerShown: false,
                    // title: "Setup Meals",
                    headerStyle: {
                        backgroundColor: Colors.yellow100,
                    },
                    headerTitleStyle: { fontFamily: "Bold" },
                    cardStyleInterpolator:
                        CardStyleInterpolators.forVerticalIOS,
                }}
            />

            <Stack.Screen
                name="profile"
                component={Profile}
                options={{
                    headerShown: false,
                    title: ""
                }}
            />
            <Stack.Screen
                name="address"
                component={Address}
                options={{
                    headerShown: false,
                    title: ""
                }}
            />
            <Stack.Screen
                name="settings"
                component={Settings}
                options={{
                    headerShown: false,
                    title: ""
                }}
            />
        </Stack.Navigator>

        //  </ScreenSwitcher>
    );
}


