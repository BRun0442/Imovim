import React, { useState, useContext } from 'react';
import { Text, View, Image, TextInput, StatusBar, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './styles'

import ValidateData from '../../../services/login.js';

import { AuthContext } from '../../../contexts/auth.js';
import { AccountDataContext } from '../../../contexts/accountData';
import { showToastError, showToastSuccess } from '../../Toast/Toast';

import Toast from 'react-native-toast-message'
import { toastConfig } from '../../Toast/toastConfig';
import * as SecureStore from 'expo-secure-store';

import { Entypo } from '@expo/vector-icons';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

const handleStorage = async (key, value) => {
  await save(key, value)
  // await getValueFor(key)
}

export default function RecuperarSenha3({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLogin } = useContext(AuthContext);
  const { setId } = useContext(AuthContext);
  const { setAccountData } = useContext(AccountDataContext);

  const [visiblePassword, setVisiblePassword] = useState(true)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Imovim</Text>
      </View>

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
                onChangeText={(value) => setPassword(value)}
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
                onChangeText={(value) => setPassword(value)}
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
            onPress={()=> navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>

        </View>
      </View>
      <Toast config={toastConfig} />
    </ScrollView >
  );
}