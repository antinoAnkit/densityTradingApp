import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color_dark from '../../constants/color_dark.json';
import {getDimen} from '../../dimensions/dimen';
import textSize from '../../constants/textSize';

const BuySellBtn = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.buyBtn}>
        <Text style={styles.btnText}>Buy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sellBtn}>
        <Text style={styles.btnText}>Sell</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuySellBtn;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 0.13,
    backgroundColor: color_dark.black,
    // backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buyBtn: {
    width: getDimen(0.45),
    height: getDimen(0.13),
    backgroundColor: color_dark.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sellBtn: {
    width: getDimen(0.45),
    height: getDimen(0.13),
    backgroundColor: color_dark.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: color_dark.white,
    fontWeight: '700',
    fontSize: textSize.h3,
  },
});
