import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Linking } from 'react-native';
import { styles } from './styles'

import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';

import { CreateUserContext } from '../../../contexts/createUser';
import { sendMail } from '../../../services/sendMail';
import { AuthContext } from '../../../contexts/auth';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
  const { setEmail, setPassword, setPasswordConfirm, nickname, birthday, phoneNumber, email, password, passwordConfirm } = useContext(CreateUserContext)
  const { securityCode, setSecurityCode } = useContext(AuthContext)

  const [visiblePassword1, setVisiblePassword1] = useState(true)
  const [visiblePassword2, setVisiblePassword2] = useState(true)
  const [changeIcon, setChangeIcon] = useState(false)

  const handleOpenWebsite = () => {
    Linking.openURL('https://imovim-landing-page.vercel.app/termos-de-uso');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

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
            <TextInput
              // value={email}
              style={styles.inputLong}
              placeholder="Email"
              placeholderTextColor={"#FFF"}
              onChangeText={(value) => { setEmail(value) }}
            />

            <View>
              <TextInput
                // value={password}
                style={styles.inputLong}
                placeholder="Senha"
                placeholderTextColor={"#FFF"}
                onChangeText={(value) => { setPassword(value) }}
                secureTextEntry={visiblePassword1}
              />

              {
                visiblePassword1 === true && (
                  <TouchableOpacity
                    style={styles.iconInput}
                    onPress={() => setVisiblePassword1(false)}
                  >
                    <Entypo name="eye-with-line" size={30} color="#FFF" />
                  </TouchableOpacity>
                )
              }

              {
                visiblePassword1 === false && (
                  <TouchableOpacity
                    style={styles.iconInput}
                    onPress={() => setVisiblePassword1(true)}
                  >
                    <Entypo name="eye" size={30} color="#FFF" />
                  </TouchableOpacity>
                )
              }

            </View>

            <View>
              <TextInput
                // value={passwordConfirm}
                style={styles.inputLong}
                placeholder="Confirmar Senha"
                placeholderTextColor={"#FFF"}
                onChangeText={(value) => { setPasswordConfirm(value) }}
                secureTextEntry={visiblePassword2}
              />

              {
                visiblePassword2 === true && (
                  <TouchableOpacity
                    style={styles.iconInput}
                    onPress={() => setVisiblePassword2(false)}
                  >
                    <Entypo name="eye-with-line" size={30} color="#FFF" />
                  </TouchableOpacity>
                )
              }

              {
                visiblePassword2 === false && (
                  <TouchableOpacity
                    style={styles.iconInput}
                    onPress={() => setVisiblePassword2(true)}
                  >
                    <Entypo name="eye" size={30} color="#FFF" />
                  </TouchableOpacity>
                )
              }

            </View>

          </View>

        </KeyboardAvoidingView>

        <View style={styles.termsOfUseContainer}>

          {
            changeIcon ? (
              <TouchableOpacity
                style={styles.termsOfUseButton}
                onPress={() => setChangeIcon(false)}
              >
                <Feather name="check" size={25} color="#FFF" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.termsOfUseButton}
                onPress={() => setChangeIcon(true)}
              >
              </TouchableOpacity>
            )
          }

          <Text style={styles.termsOfUseText1}>Li e concordo com os </Text>

          <TouchableOpacity onPress={handleOpenWebsite}>
            <Text style={styles.termsOfUseText2}>termos de uso</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (changeIcon) {
                if (password == passwordConfirm) {
                  if ( password.length > 6) {
                  try {
                    const res = await sendMail(email, "Confirmação de email")
                    const array = securityCode
                    array.push(res)
                    setSecurityCode(array)
                  } catch (err) {
                    console.log('api error!!!');
                    const res = await sendMail(email, "Confirmação de email")
                    const array = securityCode
                    array.push(res)
                    setSecurityCode(array)
                  } finally {
                    navigation.navigate('Cadastro Validacao')
                  }
                } else {
                  alert("As senhas tem que ter pelo menos 7 digitos");
                }
                } else {
                  alert('Senhas não coincidem')
                }
              } else {
                alert('Por favor, aceite os termos de uso para continuar.')
              }
            }
            }>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>

          <View style={styles.forgotPasswordContainer}>

            <Text style={styles.text1}> Já possui um cadastro? </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text2}>Login</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>

    </ScrollView >
  );
}