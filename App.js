import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './contexts/auth';
import CreateUserProvider from './contexts/createUser';
import Routes from './routes';

<<<<<<< HEAD
function App()
{
  return(
    <NavigationContainer>
      <CreateUserProvider>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </CreateUserProvider>
    </NavigationContainer>
=======
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

>>>>>>> a8bc4901fac442cd362aa589c4949a5a21139d7e
  )
}

export default App;