import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import { defaultStyle } from '../../../assets/style/style';
import TopBar from '../../TopBar/TopBar';
import Post from '../../Post/Post.js';

function Cadastro()
{
  return(
    <View style={{
      // backgroundColor: 'white',
      // height: '100%',
    }}>
      <TopBar 
        profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
        postImage="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd54aebe14a809e43/637fda5a74b88f10ab93e298/brasil_servia_richarlison_2_gol_2.jpg"
      />
      
      <Post 
        profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
        postImage="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd54aebe14a809e43/637fda5a74b88f10ab93e298/brasil_servia_richarlison_2_gol_2.jpg"
        profileName="Osmar Bruno"
        postDate="hh/dd. quinta 24 de nov"
        postDescription="Esse gol foi realmente muito lindo! Pra cima deles Brasil!!"
      />

      <Post 
        profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
        postImage="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd54aebe14a809e43/637fda5a74b88f10ab93e298/brasil_servia_richarlison_2_gol_2.jpg"
        profileName="Osmar Bruno"
        postDate="hh/dd. quinta 24 de nov"
        postDescription="Esse gol foi realmente muito lindo! Pra cima deles Brasil!!"
      />

      <Post 
        profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
        postImage="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd54aebe14a809e43/637fda5a74b88f10ab93e298/brasil_servia_richarlison_2_gol_2.jpg"
        profileName="Osmar Bruno"
        postDate="hh/dd. quinta 24 de nov"
        postDescription="Esse gol foi realmente muito lindo! Pra cima deles Brasil!!"
      />
    </View>
  );
}

export default Cadastro;