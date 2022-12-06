import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// constants
import images from '../../assets/images';
import textSize from '../../constants/textSize';
import color_dark from '../../constants/color_dark.json';
// screens
import Chart from '../../screens/BottomTabScreens/Home/HomeToptab.js/Chart';
import OrderBook from '../../screens/BottomTabScreens/Home/HomeToptab.js/OrderBook';
import RecentTrades from '../../screens/BottomTabScreens/Home/HomeToptab.js/RecentTrades';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color_dark.white,
        tabBarInactiveTintColor: color_dark.light_black,
        tabBarLabelStyle: {
          fontSize: textSize.h4,
          fontWeight: '400',
          textTransform: 'capitalize',
        },
        tabBarStyle: {
          overflow: 'hidden',
          backgroundColor: color_dark.black,
        },
        tabBarIndicatorStyle: {
          marginHorizontal: 30,
          width: 70,
          borderColor: color_dark.yellow,
          borderWidth: 2,
        },
      }}>
      <Tab.Screen upperca name="Chart" component={Chart} />
      <Tab.Screen name="OrderBook" component={OrderBook} />
      <Tab.Screen name="Recent Trades" component={RecentTrades} />
    </Tab.Navigator>
  );
}

export default TopTabNavigation;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
});
