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
            <Text style={styles.subTitle}>Login</Text>
          </View>

          <View>

            <TextInput
              style={styles.inputLong}
              onChangeText={(value) => setEmail(value)}
              placeholder="Email"
              placeholderTextColor={"#FFF"}
            />

            <TextInput
              style={styles.inputLong}
              onChangeText={(value) => setPassword(value)}
              placeholder="Email"
              placeholderTextColor={"#FFF"}
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
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.forgotPasswordContainer}>

            <Text
              style={styles.text1}
              onPress={() => navigation.navigate('Login')}
            >
              Não possui cadastro? 
            </Text>

            <Text style={styles.text2}>Cadastre-se aqui</Text>

          </View>

        </View>
      </View>

    </ScrollView >
  );
}