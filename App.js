import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Pages/Home/Home.js';
import Cadastro from './components/Pages/Cadastro/Cadastro.js';
import Login from './components/Pages/Login/Login.js';
import Feed from './components/Pages/Feed/Feed.js';
import Comentarios from './components/Pages/Comentarios/Comentarios.js';
import PerfilVisãoExterna from './components/Pages/PerfilVisãoExterna/Perfil.js'
import PerfilVisãoInterna from './components/Pages/PerfilVisãoInterna/Perfil.js';
import CriarPost from './components/Pages/CriarPost/CriarPost'

function App()
{
  return(
    <View>
      {/* <Comentarios 
        likeQuantity="44" 
        comentQuantity="2"
        shareQuantity="442"
      /> */}

      <CriarPost/>
      
    </View>
  )
}

export default App;