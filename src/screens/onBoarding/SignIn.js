import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// constants
import {commonStyles} from '../../constants/commanStyles';
import showMessage from '../../components/showMessage';

const SignIn = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile', 'email'],
      webClientId:
        '163777662126-ll6nqii133dfk92lmkkv96imgqciip1b.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo.idToken);
      await AsyncStorage.setItem('token', userInfo.idToken);
      navigation.replace('TabNavigator');
      showMessage('Sign in successful');
      this.setState({userInfo});
    } catch (error) {
      console.log('errorr', error);
      // Alert.alert('Something went wrong');
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>signIn</Text>
      {/* <Button title="Google Sign-In" onPress={() => signIn()} /> */}
      <GoogleSigninButton
        style={{width: 192, height: 48, alignSelf: 'center'}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        // disabled={this.state.isSigninInProgress}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
