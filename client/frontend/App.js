import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/Login/Login';
import CadastroScreen from './components/Cadastro/Cadastro';
import LandingScreen from './components/Landing/Landing';
import FeedScreen from './components/Feed/Feed';
// Navegação de Telas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createStackNavigator() // gerencia a navegação entre as telas

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false   // verifica se o componente ja esta na tela, caso n esteja mostra um "carregando..."
    }
  }

  // é executado assim q o componente for exibido na tela
  componentDidMount(){  // essa funcao é apenas usavel pelas classes herdeiras de Component, por isso estou usando classe
    onAuthStateChanged(auth, (user) => {  // verifica se o usuario esta logado
      if(!user){
        this.setState({
          loggedIn: false, // caso o usuario NAO esteja logado
          loaded: true  // componente ja esta na tela!
        })
      }
      else{
        this.setState({
          loggedIn: true, // caso o usuario ja esteja logado
          loaded: true  // componente ja esta na tela!
        })
      }
    })
  }

  render() {
    const { loaded, loggedIn } = this.state // pega as variaveis do state
    if(!loaded){  // caso o componente n esteja na tela
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Carregando...</Text>
        </View>
      )
    }

    // caso o usuario n esteja logado sera mostrado a tela de boas vindas
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown: false}} />
            <Stack.Screen name='Cadastro' component={CadastroScreen} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    // caso o usuario estaja logado ele ira para o feed
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Feed'>
          <Stack.Screen name='Feed' component={FeedScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
