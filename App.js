import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './contexts/auth';
import CreateUserProvider from './contexts/createUser';
import Routes from './routes';

import Eventos from './components/Pages/Eventos/Eventos';

function App()
{
  return(
    // <NavigationContainer>
    //   <CreateUserProvider>
    //     <AuthProvider>
    //       <Routes/>
    //     </AuthProvider>
    //   </CreateUserProvider>
    // </NavigationContainer>

    <Eventos />

  )
}

export default App;