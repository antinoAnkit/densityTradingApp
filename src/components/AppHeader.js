import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color_dark from '../constants/color_dark.json';
import textSize from '../constants/textSize';
import {getDimen} from '../dimensions/dimen';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      {/* First view for row in parent view */}
      <View style={styles.coinName}>
        <Image source={images.bitcoin} style={styles.coins} />

        <View>
          <Text
            style={{
              fontSize: textSize.h3,
              fontWeight: '900',
              color: color_dark.white,
            }}>
            BTCUSDT
          </Text>
          <Text style={{fontSize: textSize.h6, color: color_dark.white}}>
            Perpetual
          </Text>
        </View>

        <Image source={images.dropDown} style={styles.arrowUp} />
      </View>

      {/* Second view for row in parent view */}
      <View style={styles.coinStatus}>
        <Image source={images.ArrowDown} style={styles.arrowDown} />

        <View style={{}}>
          <Text
            style={{fontSize: textSize.h3, fontWeight: '900', color: 'green'}}>
            $40,998
          </Text>
          <Text
            style={{
              fontSize: textSize.h4,
              fontWeight: 'normal',
              alignSelf: 'flex-end',
              color: 'green',
            }}>
            5.38%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    // flex: 0.07,
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  coinName: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    width: '37%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coins: {
    width: getDimen(0.08),
    height: getDimen(0.08),
  },
  coinStatus: {
    flexDirection: 'row',
    // backgroundColor: 'white',
    width: '22%',
    justifyContent: 'space-between',
  },
  arrowUp: {
    width: 10,
    height: 6,
    bottom: 4,
  },
  arrowDown: {
    width: 8,
    height: 10,
    tintColor: 'green',
    top: 5,
  },
});
