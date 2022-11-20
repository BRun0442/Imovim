import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import Input from '../../Input/Input';

function Cadastro()
{
  return(
    <View style={styles.Container}>
      <Text style={styles.Title}>IMOVIM</Text>

      <View style={styles.registrationContainer}>
        <Text style={styles.Registration}>Cadastro</Text>
        <Input inputText="Nome"/>
        <Input inputText="Email"/>
        <Input inputText="Senha"/>
        <Input inputText="Repetir Senha"/>
      </View>
      
    </View>
  );
}

export default Cadastro;