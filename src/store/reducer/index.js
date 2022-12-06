import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const RootReducer = combineReducers({});

const rootReducer1 = (state, action) => {
  //   if (action.type === LOGOUT_DATA) {
  //     state = undefined;
  //     AsyncStorage.clear();
  //   }
  return RootReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer1);
