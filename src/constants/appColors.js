// For changing the theme of whole application

import React, {useEffect, useState, useContext} from 'react';
import {useTheme, Switch, TouchableRipple} from 'react-native-paper';
import darkColors from '../constants/color_dark.json';
import lightColors from '../constants/color_light.json';

export const AppColors = themeColorData => {
  return themeColorData === true ? darkColors : lightColors;
};
