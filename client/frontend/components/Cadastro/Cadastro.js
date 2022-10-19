import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'

export default function Cadastro() {
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
          <TextInput placeholder='Email' style={styles.input} ></TextInput>
        </View>


        <Text style={styles.titleDate}>Data de Nascimento</Text>

        <View style={styles.containerDate}>

          <TextInput style={styles.inputDate} placeholder='dd'></TextInput>
          <TextInput style={styles.inputDate} placeholder='mm'></TextInput>
          <TextInput style={styles.inputDate} placeholder='aaaa'></TextInput>

        </View>

        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder='Senha'></TextInput>
          <TextInput style={styles.input} placeholder='Repetir senha'></TextInput>
        </View>

        <View style={styles.containerBottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.text1}>Já possui um cadastro?</Text>
          <Text style={styles.text2}>Acesse por aqui</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
