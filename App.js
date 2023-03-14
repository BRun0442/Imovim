import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './contexts/auth';
import CreateUserProvider from './contexts/createUser';
import CreateAccountDataContext from './contexts/accountData';
import Routes from './routes';

function App() {
  return (
    <NavigationContainer>
      <CreateUserProvider>
        <AuthProvider>
          <CreateAccountDataContext>
            <Routes />
          </CreateAccountDataContext>
        </AuthProvider>
      </CreateUserProvider>
    </NavigationContainer>
  )
}

export default App;