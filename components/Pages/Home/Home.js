import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, Dimensions } from 'react-native';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { defaultStyle } from '../../../assets/style/style';
import Button from '../../Button/Button.js';

function Home({ navigation }) {
  return (
    <View style={defaultStyle.container}>
      <View>
        <Text style={defaultStyle.title}>Imovim</Text>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.text}>Seja bem-vindo a rede social brasileira de esportes!</Text>
          <Text style={styles.text}>Faça parte da rede que te movimenta</Text>
        </View>

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
      <Image
        source={require('../../../assets/waves.png')}
        style={styles.img}
      />
    </View>
  );
}

export default Home;