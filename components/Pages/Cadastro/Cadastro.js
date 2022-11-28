import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import { defaultStyle } from '../../../assets/style/style';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';

function Cadastro()
{
  return(
    <View style={defaultStyle.container}>
      <Text style={defaultStyle.title}>IMOVIN</Text>

      <Image 
        style={defaultStyle.basketBall} 
        source={basketBall}
      />

      <Image 
        style={defaultStyle.soccerBall} 
        source={soccerBall}
      />

      <View style={defaultStyle.inputContainer}>
        <Text style={defaultStyle.subTitle}>Cadastro</Text>
        <Input width="90%" inputText="Nome"/>
        <Input width="90%" inputText="Email"/>

        <View style={styles.textBox}>
          <Text style={defaultStyle.defaultText}>Data de nascimento</Text>

          <TextInput 
            style={styles.input} 
            placeholder='dd'
            placeholderTextColor="#DCDCDC" 
            textAlign="center"
          >
          </TextInput>

          <TextInput 
            style={styles.input} 
            placeholder='mm'
            placeholderTextColor="#DCDCDC" 
            textAlign="center"
          >
          </TextInput>

          <TextInput 
            style={styles.input} 
            placeholder='aaaa'
            placeholderTextColor="#DCDCDC" 
            textAlign="center"
          >
          </TextInput>

        </View>

        <Input width="90%" inputText="Senha"/>
        <Input width="90%" inputText="Repetir Senha"/>

        <View style={styles.buttonContainer}>
          <Button buttonText="Entrar"/>
          <Text style={defaultStyle.mediumText}>Já possui um cadastro?</Text>
          <Text 
            style={{
              color: '#FF6709',
              fontSize: 16,
              fontWeight: '700',
              textAlign: 'center',
              paddingTop: 5,
            }}>
              Acesse por aqui
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Cadastro;