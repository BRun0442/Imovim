import React, { useState, useContext } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './styles'

import { AuthContext } from '../../../contexts/auth.js';
import { showToastError, showToastSuccess } from '../../Toast/Toast';

import Toast from 'react-native-toast-message'
import { toastConfig } from '../../Toast/toastConfig';
import { recoverPassword } from '../../../services/user';
import { Entypo } from '@expo/vector-icons';

export default function RecuperarSenha3({ navigation }) {
  const { recoverEmail } = useContext(AuthContext)
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [visiblePassword, setVisiblePassword] = useState(true)

  const handleSubmit = async () => {
    if (password1.length < 7 || password2.length < 7) {
      showToastError("As senhas devem ter pelo menos 7 digitos!", '')
    }
    else if (password1 == password2) {
      try{
        await recoverPassword(recoverEmail, password1)
        .then(() => {
          showToastSuccess("Senha alterada com sucesso!")
          console.log('success');
        }).catch(async() => {
          await recoverPassword(recoverEmail, password1)
          showToastSuccess("Senha alterada com sucesso!")
          console.log('error');
        })
      } catch(err) {
        await recoverPassword(recoverEmail, password1)
        .then(() => {
          showToastSuccess("Senha alterada com sucesso!")
          console.log('log error');
        }).catch(async() => {
          await recoverPassword(recoverEmail, password1)
          showToastSuccess("Senha alterada com sucesso!")
          console.log('success');
        })
      } finally {
        await recoverPassword(recoverEmail, password1)
        showToastSuccess("Senha alterada com sucesso!")
        navigation.navigate("Login")
        console.log('finally');
      }
    } else {
      showToastError("As senhas não coincidem!", '')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.form}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Recuperar Senha</Text>
          </View>

          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>Escreva sua nova senha</Text>
          </View>

          <View>

            <View>
              <TextInput
                style={styles.redefineInput}
                value={password1}
                onChangeText={(value) => setPassword1(value)}
                placeholder="Senha"
                placeholderTextColor={"#FFF"}
                secureTextEntry={visiblePassword}
              />

              {
                visiblePassword === true && (
                  <TouchableOpacity
                    style={styles.iconInput}
                    onPress={() => setVisiblePassword(false)}
                  >
                    <Entypo name="eye-with-line" size={30} color="#FFF" />
                  </TouchableOpacity>
                )
              }

              {
                visiblePassword === false && (
                  <TouchableOpacity
                    style={styles.iconInput}
                    onPress={() => setVisiblePassword(true)}
                  >
                    <Entypo name="eye" size={30} color="#FFF" />
                  </TouchableOpacity>
                )
              }

            </View>

            <View>
              <TextInput
                style={styles.redefineInput}
                value={password2}
                onChangeText={(value) => setPassword2(value)}
                placeholder="Repetir senha"
                placeholderTextColor={"#FFF"}
                secureTextEntry={visiblePassword}
              />

              {
                visiblePassword === true && (
                  <TouchableOpacity
                    style={styles.iconInput}
                    onPress={() => setVisiblePassword(false)}
                  >
                    <Entypo name="eye-with-line" size={30} color="#FFF" />
                  </TouchableOpacity>
                )
              }

              {
                visiblePassword === false && (
                  <TouchableOpacity
                    style={styles.iconInput}
                    onPress={() => setVisiblePassword(true)}
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
            onPress={() => handleSubmit()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>

        </View>
      </View>
      
    </ScrollView >
  );
}