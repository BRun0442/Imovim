import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import Input from '../../Input/Input';

function Cadastro()
{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>IMOVIM</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subTitle}>Cadastro</Text>
        <Input width="90%" inputText="Nome"/>
        <Input width="90%" inputText="Email"/>

        <View style={styles.textBox}>
          <Text style={styles.defaultText}>Data de nascimento</Text>

          <Input width="150%" inputText="dd" textAlign="center"/>
          <Input width="150%" inputText="mm" textAlign="center"/>
          <Input width="150%" inputText="aaaa" textAlign="center"/>
        </View>

        <Input width="90%" inputText="Senha"/>
        <Input width="90%" inputText="Repetir Senha"/>
      </View>
    </View>
  );
}

export default Cadastro;