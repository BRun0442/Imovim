import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './contexts/auth';
import CreateUserProvider from './contexts/createUser';
import CreateAccountDataContext from './contexts/accountData';

import Routes from './routes';

import Toast from 'react-native-toast-message'
import { toastConfig } from './components/Toast/toastConfig';

// eas build -p android --profile preview

export default function App() {
  return (
    <NavigationContainer>
      <CreateUserProvider>
        <AuthProvider>
          <CreateAccountDataContext>
            <Routes />
            <StatusBar backgroundColor="#000" barStyle={'light-content'} />
            <Toast config={toastConfig} />
          </CreateAccountDataContext>
        </AuthProvider>
      </CreateUserProvider>
    </NavigationContainer>
  )
}