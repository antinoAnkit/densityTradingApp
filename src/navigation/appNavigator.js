// used react native paper for themiming app
import React, {useEffect, useState, useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

// constants
import darkColors from '../constants/color_dark.json';
import lightColors from '../constants/color_light.json';

// screens and components
import TabNavigator from './BottomTabNavigator/TabNavigator';
import {AuthContext} from '../components/context';
import SignIn from '../screens/onBoarding/SignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tokens} from 'react-native-paper/lib/typescript/styles/themes/v3/tokens';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </>
  );
};

const AppNavigator = () => {
  const [token, settoken] = useState('');
  useEffect(async () => {
    var getToken = await AsyncStorage.getItem('token');
    console.log('tokennn', getToken);
    settoken(getToken);
  }, []);

  const HomeStack = () => {
    return (
      <>
        {/* {token ? (
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
        )} */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
         name="SignIn"
         component={SignIn}
         options={{headerShown: false}}
         /> */}
      </>
    );
  };

  // console.log('tokennn', getToken);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const authContext = useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );
  // const CustomDefaultTheme = {
  //   ...NavigationDefaultTheme,
  //   ...PaperDefaultTheme,
  //   colors: {
  //     ...NavigationDarkTheme.colors,
  //     ...PaperDarkTheme.colors,
  //     text: '#ffffff',
  //     ...lightColors,
  //   },
  // };

  // const CustomDarkTheme = {
  //   ...NavigationDarkTheme,
  //   ...PaperDarkTheme,
  //   colors: {
  //     ...NavigationDarkTheme.colors,
  //     ...PaperDarkTheme.colors,
  //     text: '#333333',
  //     ...darkColors,
  //   },
  // };

  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  //   const checkToken = useSelector(state => state.login.accessToken);
  //   console.log('checkinh auth key', checkToken);

  //   useEffect(() => {}, [checkToken]);

  return (
    //
    <PaperProvider>
      <AuthContext.Provider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* {token ? HomeStack() : LoginStack()} */}
            {HomeStack()}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default AppNavigator;
