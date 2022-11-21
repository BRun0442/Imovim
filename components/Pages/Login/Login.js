import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import Input from '../../Input/Input';
import Button from '../../Button/Button.js';
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';

function Login()
{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>IMOVIN</Text>

      <Image 
        style={{
          position: 'absolute',
          resizeMode: 'stretch',
          width: 150,
          height: 150,
        }} 
        source={basketBall}
      />

      <Image 
        style={{
          position: 'absolute',
          resizeMode: 'stretch',
          top: 200,
          width: 150,
          height: 150,
        }} 
        source={soccerBall}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.subTitle}>Login</Text>
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
              fontSize: 16,
              fontWeight: '700',
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