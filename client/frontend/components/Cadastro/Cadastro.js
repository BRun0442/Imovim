import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")

  const cadastrar = () => {
    if (senha === confirmarSenha & senha.length > 6){
      createUserWithEmailAndPassword(auth, email, senha)  // cadastra o usuario no firebase
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    else{
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
          <TextInput placeholder='Nome' style={styles.input} ></TextInput>
          <TextInput onChangeText={(email) => setEmail(email)} placeholder='Email' style={styles.input} ></TextInput>
        </View>


        <Text style={styles.titleDate}>Data de Nascimento</Text>

        <View style={styles.containerDate}>

          <TextInput style={styles.inputDate} placeholder='dd'></TextInput>
          <TextInput style={styles.inputDate} placeholder='mm'></TextInput>
          <TextInput style={styles.inputDate} placeholder='aaaa'></TextInput>

        </View>

        <View style={styles.containerInput}>
          <TextInput 
            secureTextEntry={true} 
            onChangeText={(senha) => setSenha(senha)} 
            style={styles.input} 
            placeholder='Senha' />
          <TextInput 
            secureTextEntry={true} 
            onChangeText={(confirmarSenha) => setConfirmarSenha(confirmarSenha)} 
            style={styles.input} placeholder='Repetir senha' />
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
