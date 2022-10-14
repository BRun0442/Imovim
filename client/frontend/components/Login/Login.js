import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>IMOVIN</Text>
      </View>

      <View style={styles.containerLogin}>
        <Text style={styles.containerTitle}>Login</Text>

        <View style={styles.containerInput}>
          <TextInput placeholder='Email' style={styles.input} />
          <TextInput placeholder='Senha' style={[styles.input, styles.senha]} />
        </View>
          <Text style={styles.forgotPass}>Esqueci minha senha</Text>

        <View style={styles.containerBottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.text1}>Não possui cadastro?</Text>
          <Text style={styles.text2}>Cadastre-se aqui</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


