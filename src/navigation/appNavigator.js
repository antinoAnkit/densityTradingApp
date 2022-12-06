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

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </>
  );
};

const AppNavigator = () => {
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
            {/* {checkToken ? HomeStack() : HomeStack()} */}
            {HomeStack()}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default AppNavigator;
