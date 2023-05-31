import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './styles'

import { AuthContext } from '../../../contexts/auth';

export default function RecuperarSenha({ navigation }) {
  const { recoverEmail, setRecoverEmail } = useContext(AuthContext)

  return (
    <ScrollView style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Imovim</Text>
      </View>

      <View style={styles.form}>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Recuperar senha</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text} >Digite o email cadastrado para válidação do código</Text>
          </View>

          <View>

            <TextInput
              style={styles.inputLong}
              value={recoverEmail}
              onChangeText={(value) => { setRecoverEmail(value) }}
              placeholder="Email"
              placeholderTextColor={"#FFF"}
            />

          </View>
        </KeyboardAvoidingView>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate('Recuperar Senha 2') }
            }>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>

        </View>

      </View>

    </ScrollView >
  );
}