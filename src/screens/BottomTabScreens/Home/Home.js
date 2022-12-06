import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// constants
import color_dark from '../../../constants/color_dark.json';
import {commonStyles} from '../../../constants/commanStyles';

// Components and screens
import Header from '../../../components/HomeComponents/Header';
import AppHeader from '../../../components/AppHeader';
import TopTabNavigation from '../../../navigation/TopTabNavigaton/TopTabNavigation';
import BuySellBtn from '../../../components/HomeComponents/BuySellBtn';

const Stack = createNativeStackNavigator();

const TabStack = () => {
  return (
    <>
      <Stack.Screen
        name="TopTabs"
        component={TopTabNavigation}
        options={{headerShown: false}}
      />
    </>
  );
};

const Home = () => {
  return (
    <View style={commonStyles.container}>
      <AppHeader />
      <Header />
      <Stack.Navigator>{TabStack()}</Stack.Navigator>
      <BuySellBtn />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

{
  /* <NavigationContainer independent={true}>{TabStack()}</NavigationContainer> */
}
