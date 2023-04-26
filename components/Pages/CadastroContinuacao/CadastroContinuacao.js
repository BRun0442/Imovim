import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';
import { CreateUserContext } from '../../../contexts/createUser';

import { Ionicons } from '@expo/vector-icons';

export default function Cadastro({ navigation }) {
  const { setEmail, setPassword, setPasswordConfirm, nickname, birthday, phoneNumber, email, password, passwordConfirm } = useContext(CreateUserContext)

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  }

  const [visiblePassword, setVisiblePassword] = useState(true)

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            <TextInput
              // value={email}
              style={styles.inputLong}
              placeholder="Email"
              placeholderTextColor={"#FFF"}
              onChangeText={(value) => { setEmail(value) }}
            />

            <TextInput
              // value={password}
              style={styles.inputLong}
              placeholder="Senha"
              placeholderTextColor={"#FFF"}
              onChangeText={(value) => { setPassword(value) }}
              secureTextEntry={visiblePassword}
            />


              <TextInput
                // value={passwordConfirm}
                style={styles.inputLong}
                placeholder="Confirmar Senha"
                placeholderTextColor={"#FFF"}
                onChangeText={(value) => { setPasswordConfirm(value) }}
                secureTextEntry={visiblePassword}
              />

          </View>

        </KeyboardAvoidingView>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // phoneNumber.reverse();
              // birthday.reverse()
              navigation.navigate('Cadastro Validacao')
              // CreateUser(nickname, email, password, passwordConfirm, birthday, phoneNumber, goToLoginScreen)
            }
            }>
            <Text style={styles.buttonText}>Avançar</Text>
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

        <View style={styles.radioContainer} >
          <View style={styles.radioOrange} />
          <View style={styles.radioOrange} />
          <View style={styles.radio} />
        </View>

      </View>


    </ScrollView >
  );
}