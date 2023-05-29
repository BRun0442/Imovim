import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';
import { CreateUserContext } from '../../../contexts/createUser';
import CreateUser from '../../../services/createUser';
import { AuthContext } from '../../../contexts/auth';
import { sendMail } from '../../../services/sendMail';

export default function Cadastro({ navigation }) {
  const { setEmail, setPassword, setPasswordConfirm, nickname, birthday, phoneNumber, email, password, passwordConfirm } = useContext(CreateUserContext)
  const { securityCode, setSecurityCode } = useContext(AuthContext)
  const [code, setCode] = useState('')

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Imovim</Text>
      </View>

      <Image
        style={styles.basketBall}
        source={basketBall}
      />

      <Image
        style={styles.soccerBall}
        source={soccerBall}
      />

      <View style={styles.form}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Cadastre-se</Text>
          </View>

          <View>

            <View style={styles.interTitleContainer}>
              <Text style={styles.interTitle}>
                Enviamos um código de verificação
                para o e-mail cadastrado.
              </Text>

              <Text style={styles.interTitle}>
                Por favor escreva a numeração recebida abaixo.
              </Text>

            </View>

            <View style={styles.inputContainer}>

              <TextInput
                onChangeText={(value) => setCode(value)}
                style={styles.inputLong}
                maxLength={6}
                keyboardType="numeric"
              />

            </View>

          </View>

        </KeyboardAvoidingView>

        <TouchableOpacity
          onPress={async () => {
            const res = await sendMail(email, "Confirmação de email")
            const array = securityCode
            array.push(res)
            setSecurityCode(array)
          }
          }>
          <Text style={styles.buttonText}>Reenviar codigo</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>


          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (securityCode.includes(parseInt(code))) {
                CreateUser(nickname, email, password, passwordConfirm, birthday, phoneNumber, goToLoginScreen)
              } else {
                console.log(securityCode.length);
                alert('Código de verificação incorreto!')
              }
            }
            }>
            <Text style={styles.buttonText}>Concluir</Text>
          </TouchableOpacity>

          <View style={styles.forgotPasswordContainer}>

            <Text
              style={styles.text1}
              onPress={() => { navigation.navigate('Login') }}
            >
              Já possui um cadastro?
            </Text>

            <Text style={styles.text2}>Login</Text>

          </View>

        </View>

      </View>

    </ScrollView >
  );
}