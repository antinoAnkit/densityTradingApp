// Initialized the redux and redux-saga
// we use redux-saga  as a middleware to manage api calls

// Trading view graph is not implimented in this appp because the library provided is supported only in web. The graph implimentation need to R & D on that.

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// Redux initialization in rooot folder
import RootReducer from './src/store/reducer';
import AppNavigator from './src/navigation/appNavigator';
import SignIn from './src/screens/onBoarding/SignIn';
import {MenuProvider} from 'react-native-popup-menu';

const store = createStore(RootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    </Provider>
  );
};

export default App;
