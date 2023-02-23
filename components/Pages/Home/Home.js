import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image , StatusBar} from 'react-native';
import { styles } from './styles';
import { defaultStyle } from '../../../assets/style/style';
import Button from '../../Button/Button.js';

function Home({ navigation }) {
  return (
    <View style={defaultStyle.container}>
      <Text style={defaultStyle.title}>Imovim</Text>
      <Text style={styles.text}>Seja bem-vindo a rede social brasileira de esportes!</Text>
      <Text style={styles.text}>Faça parte da rede que te movimenta</Text>

      <View style={styles.acessContainer}>
        <Button buttonText="Login" pressFunction={() => { navigation.navigate('Login') }} />

        <TouchableOpacity style={styles.transparentButton} onPress={() => { navigation.navigate('Cadastro') }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
            }}>
            Cadastrar-se
          </Text>
        </TouchableOpacity>

      </View>
      <StatusBar />
    </View>
  );
}

export default Home;