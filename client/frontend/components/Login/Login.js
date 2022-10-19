import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'

export default function Login() {
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
            <TextInput placeholder='Email' style={styles.input} />
            <TextInput placeholder='Senha' style={[styles.input, styles.senha]} />
          </View>
          <Text style={styles.forgotPass}>Esqueci minha senha</Text>
        </View>

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


