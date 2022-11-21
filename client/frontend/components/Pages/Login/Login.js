import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import Input from '../../Input/Input';
import Button from '../../Button/Button.js';

function Login()
{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>IMOVIM</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subTitle}>Cadastro</Text>
        <Input width="90%" inputText="Email"/>
        <View style={styles.passwordContainer}>
          <Input width="90%" inputText="Senha"/>
          <Text style={styles.smallText}>Esqueci minha senha</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button buttonText="Entrar"/>
          <Text style={styles.mediumText}>Não possui cadastro?</Text>
          <Text 
            style={{
              color: '#FF6709',
              fontSize: 15,
              textAlign: 'center',
              paddingTop: 5,
            }}>
              Cadastre-se aqui
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Login;