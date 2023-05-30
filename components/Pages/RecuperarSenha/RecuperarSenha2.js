import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'

export default function RecuperarSenha({ navigation }) {
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
            onPress={() => { navigation.navigate('Recuperar Senha 3') }
            }>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>

        </View>

      </View>

      <StatusBar />

    </ScrollView >
  );
}