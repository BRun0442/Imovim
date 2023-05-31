import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './styles'

import { sendMail } from '../../../services/sendMail';
import { AuthContext } from '../../../contexts/auth';

export default function RecuperarSenha({ navigation }) {
  const { securityCode, setSecurityCode, recoverEmail } = useContext(AuthContext)
  const [code, setCode] = useState('')

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
            <Text style={styles.text}>Informe o código recebido</Text>
          </View>

          <View>

            <View style={styles.inputContainer}>

              <TextInput
                onChangeText={(value) => setCode(value)}
                value={code}
                style={styles.inputNumber}
                maxLength={6}
                keyboardType="numeric"
              />

            </View>

          </View>
        </KeyboardAvoidingView>

        <View style={styles.buttonContainer}>

        <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const res = await sendMail(recoverEmail, "Recuperação de senha")
              const array = securityCode
              array.push(res)
              setSecurityCode(array)
            }
            }>
            <Text style={styles.buttonText}>Reenviar código</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => { 
              if (securityCode.includes(parseInt(code))) {
                // alert('Código de verificação correto!')
                navigation.navigate('Recuperar Senha 3') 
              } else {
                console.log(securityCode.length);
                alert('Código de verificação incorreto!')
              }
            }
            }>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>

        </View>

      </View>

    </ScrollView >
  );
}