import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './contexts/auth';
import CreateUserProvider from './contexts/createUser';
import CreateAccountDataContext from './contexts/accountData';
import Routes from './routes';
import Toast from 'react-native-toast-message'
import { toastConfig } from './components/Toast/toastConfig';

// eas build -p android --profile preview

function App() {
  return (
    <NavigationContainer>
      <CreateUserProvider>
        <AuthProvider>
          <CreateAccountDataContext>
            <Routes />
            <Toast config={toastConfig} />
          </CreateAccountDataContext>
        </AuthProvider>
      </CreateUserProvider>
    </NavigationContainer>
  )
}

export default App;