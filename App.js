import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from './contexts/auth';
import CreateUserProvider from './contexts/createUser';
import CreateAccountDataContext from './contexts/accountData';
import Routes from './routes';

function App()
{
  return(
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

// se for testar o modal usa isso: 

// import EditPhoto from './components/EditPhoto/EditPhoto';

// <EditPhoto 
    // profileImage="https://pbs.twimg.com/profile_images/1405169035621191683/qFoSj-U1_400x400.jpg" 
    // nickname="Tiaguh_"
    // created_at="Agora"
    // image="https://i.pinimg.com/736x/d0/99/04/d0990466ad4259d78d15e990c64fc328.jpg"
    // caption="KKK"
    // />