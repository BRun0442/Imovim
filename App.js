import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './contexts/auth';
import CreateUserProvider from './contexts/createUser';
import CreateAccountDataContext from './contexts/accountData';
import Routes from './routes';

import PostEvent from './components/PostEvent/PostEvent';

function App()
{
  return(
    // <NavigationContainer>
    //   <CreateUserProvider>
    //     <AuthProvider>
    //       <CreateAccountDataContext>
    //         <Routes/>
    //       </CreateAccountDataContext>
    //     </AuthProvider>
    //   </CreateUserProvider>
    // </NavigationContainer>

    <PostEvent nickname="Tiagoo" created_at="23/01/2023" eventDescription="teste teste teste" />

  )
}

export default App;