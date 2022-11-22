import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import { defaultStyle } from '../../../assets/style/style';
import Input from '../../Input/Input';
import Button from '../../Button/Button.js';
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';

function Login()
{
  return(
    <View style={defaultStyle.container}>
      <Text style={defaultStyle.title}>IMOVIN</Text>

      <Image 
        style={{
          position: 'absolute',
          right: -75,
          top: 170,
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
          bottom: 200,
          left: -80,
          width: 150,
          height: 150,
        }} 
        source={soccerBall}
      />

      <View style={defaultStyle.inputContainer}>
        <Text style={defaultStyle.subTitle}>Login</Text>
        <Input width="90%" inputText="Email"/>

        <View style={styles.passwordContainer}>
          <Input width="90%" inputText="Senha"/>
          <Text style={defaultStyle.smallText}>Esqueci minha senha</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button buttonText="Entrar"/>
          <Text style={defaultStyle.mediumText}>Não possui cadastro?</Text>
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