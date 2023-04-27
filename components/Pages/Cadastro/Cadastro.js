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
              style={styles.inputLong}
              onChangeText={(value) => { setNickname(value) }}
              placeholder="Nome completo"
              placeholderTextColor={"#FFF"}
            />

          </View>


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
          </View>

          <View>
            <TextInput
              style={styles.inputLong}
              placeholder='Telefone'
              placeholderTextColor="#DCDCDC"
              maxLength={11}
              onChangeText={(value) => { setPhoneNumberInput(value) }}
            />
          </View>

        </KeyboardAvoidingView>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // phoneNumber.reverse();
              // birthday.reverse()
              setPhoneNumber(`${ddd} ${phoneNumberInput}`);
              setBirthday(`${year}/${month}/${day}`);
              navigation.navigate('Cadastro Continuacao')
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

        <View style={styles.radioContainer} >
          <View style={styles.radioOrange} />
          <View style={styles.radio} />
          <View style={styles.radio} />
        </View>

      </View>


    </ScrollView >
  );
}