import React from 'react'
import { Button, View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'


function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Imovim</Text>
      </View>

      <View style={styles.contentSubTitle}>
        <Text style={styles.subTitle}>
          Seja bem-vindo a rede social brasileira de esportes!
        </Text>
        <Text style={styles.subTitle}>
          Faça parte da rede que te movimenta
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.typeButton1}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.typeButton2}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.textButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      <Image 
      source={require('../../assets/waves.png')} 
      style={styles.wavesImg}
      />

      <StatusBar />
    </View >
  )
}

export default Landing