// Initialized the redux and redux-saga
// we use redux-saga  as a middleware to manage api calls

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
        {/* <SignIn /> */}
      </MenuProvider>
    </Provider>
  );
};

export default App;
