import React from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { styles } from './styles';

export default function Home({ navigation }) {
  return (
    <View>
      <View style={styles.container}>

        <View style={styles.infoContainer}>

          <View style={styles.titleContainer}>
            {/* <Text style={styles.title}>Imovim</Text> */}
            <Image style={styles.title} source={require('../../../assets/logo.png')} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Seja bem-vindo a rede social brasileira de esportes!</Text>
            <Text style={styles.text}>Faça parte da rede que te movimenta</Text>
          </View>

          <View style={styles.buttonsContainer}>

            <TouchableOpacity
              style={styles.button}
              onPress={() => { navigation.navigate('Login') }}
            >
              <Text style={styles.textButtons}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => { navigation.navigate('Cadastro') }}
            >

              <Text style={styles.textButtons}>Cadastre-se</Text>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.imgContainer}>

          <Image
            source={require('../../../assets/waves.png')}
            style={styles.img}
          />

        </View>

      </View>
      <StatusBar barStyle={'light-content'} />
    </View>
  );
}