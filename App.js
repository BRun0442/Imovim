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
import MarcarEventos from './components/Pages/MarcarEventos/MarcarEventos.js';

function App() {
  return (
    <View>
      {/* <Comentarios 
        likeQuantity="44" 
        comentQuantity="2"
        shareQuantity="442"
      /> */}

      {/* <CriarPost
        profileImage="https://randomuser.me/api/portraits/men/25.jpg"
        coment="O treino de perna ontem foi tenso..."
        profileName="Jose Wilson"
      /> */}

      <MarcarEventos
        profileImage="https://randomuser.me/api/portraits/men/63.jpg"
        coment="O treino de perna ontem foi tenso..."
        profileName="Jose Wilson"
      />

    </View>
  )
}

export default App;