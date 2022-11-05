import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { FontAwesome5 } from '@expo/vector-icons';

import { invert } from 'react-native-color-matrix-image-filters'

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const cadastrar = () => {
    if (senha === confirmarSenha & senha.length > 6) {
      createUserWithEmailAndPassword(auth, email, senha)  // cadastra o usuario no firebase
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      console.log(senha, confirmarSenha)  // caso as senhas sejam diferentes ou menor q 6 caracteres
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.basketImg}
        source={require('../../assets/bolaBasquete.png')} />

      <Image
        style={styles.footImg}
        source={require('../../assets/bolaFutebol.png')} />

      <View>
        <Text style={styles.title}>IMOVIN</Text>
      </View>

      <View style={styles.containerCadastro}>

        <Text style={styles.containerTitle}>Cadastro</Text>

        <View style={styles.containerInput}>
          <TextInput placeholderTextColor="#fff" placeholder='Nome' style={styles.input} ></TextInput>
          <TextInput placeholderTextColor="#fff" onChangeText={(email) => setEmail(email)} placeholder='Email' style={[styles.input, { marginTop: 20, marginBottom: 20 }]} ></TextInput>
        </View>

        <Text style={styles.titleDate}>Data de Nascimento</Text>

        <View style={styles.containerDate}>

          <TextInput placeholderTextColor="#fff" style={styles.inputDate} placeholder='dd'></TextInput>
          <TextInput placeholderTextColor="#fff" style={styles.inputDate} placeholder='mm'></TextInput>
          <TextInput placeholderTextColor="#fff" style={styles.inputDate} placeholder='aaaa'></TextInput>

        </View>

        <View style={styles.containerInput}>
          <View style={[{width: "100%"}]}>
            <TextInput
              placeholderTextColor="#fff"
              secureTextEntry={showPassword}
              onChangeText={(senha) => setSenha(senha)}
              style={[styles.input, { marginTop: 25 }]}
              placeholder='Senha'
            />


            <TouchableOpacity onPress={() => {setShowPassword(!showPassword)}}>
              <Image
                source={require("../../assets/sleepy-eyes.png")}
                style={[{position : 'absolute', right: 0, top: -20}]}
              >
              </Image>
            </TouchableOpacity>

            {/* <FontAwesome5 matrix={invert()} onPress={() => {setShowPassword(!showPassword)}} style={[{position : 'absolute', right: 0, top: 25, }]} name="meh-rolling-eyes" size={24} color="black" /> */}
          </View>

          <View style={[{width: "100%"}]}>
            <TextInput
              placeholderTextColor="#fff"
              secureTextEntry={showPassword}
              onChangeText={(confirmarSenha) => setConfirmarSenha(confirmarSenha)}
              style={[styles.input, { marginTop: 25 }]} placeholder='Repetir senha'
            />

            <FontAwesome5 onPress={() => {setShowPassword(!showPassword)}} style={[{position : 'absolute', right: 0, top: 25}]} name="meh-rolling-eyes" size={24} color="black" />
          </View>
        </View>

        <View style={styles.containerBottom}>
          <TouchableOpacity onPress={cadastrar} style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <Text style={styles.text1}>Já possui um cadastro?</Text>
          <Text onPress={() => navigation.navigate("Login")} style={styles.text2}>Acesse por aqui</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
