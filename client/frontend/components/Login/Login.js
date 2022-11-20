import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'

export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  // const Logar = () => {
  //   console.log(email, senha)
  //   signInWithEmailAndPassword(auth, email, senha)  // loga o usuario no firebase e armazena suas info
  //   .then((result) => {
  //     console.log(result)
  //   })
  //   .catch((err) => {
  //       console.log(err)
  //   })
  // }

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

      <View style={styles.containerLogin}>
        
        <View>
          <Text style={styles.containerTitle}>Login</Text>

          <View style={styles.containerInput}>
            <TextInput 
              onChangeText={(email) => setEmail(email)} 
              placeholder='Email' 
              placeholderTextColor="#fff"
              style={styles.input} />

            <TextInput 
              secureTextEntry={true}
              onChangeText={(senha) => setSenha(senha)} 
              placeholder='Senha' 
              placeholderTextColor="#fff"
              style={[styles.input, styles.senha]} />
          </View>
          <Text style={styles.forgotPass}>Esqueci minha senha</Text>
        </View>

        <View style={styles.containerBottom}>
          <TouchableOpacity style={styles.button}>
            <Text onPress={Logar} style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.text1}>Não possui cadastro?</Text>
          <Text onPress={() => navigation.navigate("Cadastro")} style={styles.text2}>Cadastre-se aqui</Text>
        </View>
      </View>
      <StatusBar />
    </View>
  );
}


