// Common styles which is going to used moslty with same properties

import React from 'react';
import {StyleSheet} from 'react-native';
import textSize from './textSize';
import color_dark from './color_dark.json';
import {AppColors} from './appColors';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_dark.black,
    justifyContent: 'center',
  },

  text: {
    fontSize: textSize.h3,
    color: color_dark.white,
    alignSelf: 'center',
  },

  headerText: {
    fontSize: textSize.h5,
    color: color_dark.light_black,
  },
  headerTextValues: {
    fontSize: textSize.h5,
    color: color_dark.white,
    // fontWeight: '800',
    alignSelf: 'center',
  },

  underLine: {
    width: '100%',
    backgroundColor: color_dark.light_black,
    borderWidth: 3,
    top: 4,
  },
  chartContainer: {
    backgroundColor: color_dark.chartBackGroundColor,
  },
});
