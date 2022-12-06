import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

// constanst
import images from '../../assets/images';
import color_light from '../../constants/color_light.json';
import color_dark from '../../constants/color_dark.json';

// screens
import Home from '../../screens/BottomTabScreens/Home/Home';
import Order from '../../screens/BottomTabScreens/Orders/Order';
import Positions from '../../screens/BottomTabScreens/Positions/Positions';
import Trades from '../../screens/BottomTabScreens/Trades/Trades';
import Wallet from '../../screens/BottomTabScreens/Wallet/Wallet';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={({route}) => ({
          tabBarStyle: {backgroundColor: color_light.background, padding: 10},
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? (
                <View style={Styles.tabIconContainer}>
                  <Image
                    style={Styles.selectedIconStyle}
                    source={images.home}
                  />
                  <Text style={Styles.selectedIconTextStyle}>Home</Text>
                </View>
              ) : (
                <View style={Styles.tabIconContainer}>
                  <Image
                    style={[
                      Styles.tabIcons,
                      {tintColor: color_dark.light_black},
                    ]}
                    source={images.home}
                  />
                  <Text style={Styles.unSelectedText}>Home</Text>
                </View>
              );
            } else if (route.name === 'Orders') {
              iconName = focused ? (
                <View style={Styles.tabIconContainer}>
                  <Image
                    style={Styles.selectedIconStyle}
                    source={images.orders}
                  />
                  <Text style={Styles.selectedIconTextStyle}>Order</Text>
                </View>
              ) : (
                <View style={Styles.tabIconContainer}>
                  <Image style={Styles.tabIcons} source={images.orders} />
                  <Text style={Styles.unSelectedText}>Order</Text>
                </View>
              );
            } else if (route.name === 'Trade') {
              iconName = focused ? (
                <View style={Styles.tabIconContainer}>
                  <Image
                    style={Styles.selectedIconStyle}
                    source={images.trade}
                  />
                  <Text style={Styles.selectedIconTextStyle}>Trade</Text>
                </View>
              ) : (
                <View style={Styles.tabIconContainer}>
                  <Image style={Styles.tabIcons} source={images.trade} />
                  <Text style={Styles.unSelectedText}>Trade</Text>
                </View>
              );
            } else if (route.name === 'Positions') {
              iconName = focused ? (
                <View style={Styles.tabIconContainer}>
                  <Image
                    style={Styles.selectedIconStyle}
                    source={images.positions}
                  />
                  <Text style={Styles.selectedIconTextStyle}>Positions</Text>
                </View>
              ) : (
                <View style={Styles.tabIconContainer}>
                  <Image style={Styles.tabIcons} source={images.positions} />
                  <Text style={Styles.unSelectedText}>Positions</Text>
                </View>
              );
            } else if (route.name === 'Wallet') {
              iconName = focused ? (
                <View style={Styles.tabIconContainer}>
                  <Image
                    style={Styles.selectedIconStyle}
                    source={images.wallet}
                  />
                  <Text style={Styles.selectedIconTextStyle}>Wallet</Text>
                </View>
              ) : (
                <View style={Styles.tabIconContainer}>
                  <Image style={Styles.tabIcons} source={images.wallet} />
                  <Text style={Styles.unSelectedText}>Wallet</Text>
                </View>
              );
            }
            return iconName;
          },
        })}>
        <Tab.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Tab.Screen
          name="Orders"
          options={{headerShown: false}}
          component={Order}
        />
        <Tab.Screen
          name="Trade"
          options={{headerShown: false}}
          component={Trades}
        />
        <Tab.Screen
          name="Positions"
          options={{headerShown: false}}
          component={Positions}
        />
        <Tab.Screen
          name="Wallet"
          options={{headerShown: false}}
          component={Wallet}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
}

const Styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIconStyle: {
    tintColor: color_dark.yellow,
    width: 25,
    height: 25,
  },
  selectedIconTextStyle: {
    color: color_dark.yellow,
  },
  unSelectedText: {
    color: color_dark.light_black,
    alignSelf: 'center',
  },
  tabIcons: {
    width: 25,
    height: 25,
  },
  reelsIcon: {
    width: 40,
    height: 40,
  },
  tabIconContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
