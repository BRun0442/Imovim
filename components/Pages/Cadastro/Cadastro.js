import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';
import { CreateUserContext } from '../../../contexts/createUser';

export default function Cadastro({ navigation }) {
  const { setNickname, setBirthday, setPhoneNumber } = useContext(CreateUserContext)
  let phoneNumber = ['', '']
  let birthday = ['', '', '']
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [phoneNumberInput, setPhoneNumberInput] = useState('')
  const [ddd, setDDD] = useState('')

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
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

          <View style={styles.formContainer}>

            <View style={styles.form}>

              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Cadastre-se</Text>
              </View>

              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

                <TextInput
                  style={styles.inputLong}
                  onChangeText={(value) => { setNickname(value) }}
                  placeholder="Nome completo"
                  placeholderTextColor={"#FFF"}
                />

              </KeyboardAvoidingView>

              <View style={styles.formDateContainer}>

                <Text style={styles.formDateText}>Data de nascimento</Text>

                <View style={styles.formDate}>

                  <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Dia'
                    placeholderTextColor="#DCDCDC"
                    textAlign="center"
                    maxLength={2}
                    onChangeText={(value) => { setDay(value) }}
                  />

                  <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Mês'
                    placeholderTextColor="#DCDCDC"
                    textAlign="center"
                    maxLength={2}
                    onChangeText={(value) => { setMonth(value) }}
                  />

                  <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Ano'
                    placeholderTextColor="#DCDCDC"
                    textAlign="center"
                    maxLength={4}
                    onChangeText={(value) => { setYear(value) }}
                  />

                </View>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

                  <TextInput
                    style={styles.inputLong}
                    placeholder='Telefone'
                    placeholderTextColor="#DCDCDC"
                    maxLength={11}
                    onChangeText={(value) => { setPhoneNumberInput(value) }}
                  />

                </KeyboardAvoidingView>

              </View>

              <View style={styles.buttonContainer}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    // phoneNumber.reverse();
                    // birthday.reverse()
                    setPhoneNumber(`${ddd} ${phoneNumberInput}`);
                    setBirthday(`${year}/${month}/${day}`);
                    navigation.navigate('CadastroContinuacao')
                  }
                  }>
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.forgotPasswordContainer}>

                  <Text
                    style={styles.text1}
                    onPress={() => { navigation.navigate('Login') }}
                  >
                    Já possui um cadastro?
                  </Text>

                  <Text style={styles.text2}>
                    Login
                  </Text>

                </View>

              </View>

            </View>

          </View>

        </KeyboardAvoidingView>
        <StatusBar />
      </View>
    </SafeAreaView>
  );
}