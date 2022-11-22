import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './components/Pages/Cadastro/Cadastro.js';
import Login from './components/Pages/Login/Login.js';
import Home from './components/Pages/Home/Home.js';
import Feed from './components/Pages/Feed/Feed.js';

function App()
{
  return(
    <View>
      <Feed/>
    </View>
  )
}

export default App;