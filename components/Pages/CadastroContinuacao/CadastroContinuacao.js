import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './styles'

import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';

import { CreateUserContext } from '../../../contexts/createUser';
import { sendMail } from '../../../services/sendMail';
import { AuthContext } from '../../../contexts/auth';

import { Entypo } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
  const { setEmail, setPassword, setPasswordConfirm, nickname, birthday, phoneNumber, email, password, passwordConfirm } = useContext(CreateUserContext)
  const { securityCode, setSecurityCode } = useContext(AuthContext)

  const [visiblePassword1, setVisiblePassword1] = useState(true)
  const [visiblePassword2, setVisiblePassword2] = useState(true)

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

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              try{
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