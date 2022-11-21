import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'
import Button from '../../Button/Button.js';

function Home()
{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>IMOVIN</Text>
      <Text style={styles.text}>Seja bem-vindo a rede social brasileira de esportes!</Text>
      <Text style={styles.text}>Faça parte da rede que te movimenta</Text>

      <View style={styles.acessContainer}>
        <Button buttonText="Login"/>

        <TouchableOpacity style={{
          backgroundColor: "transparent",
          borderWidth: 5,
          borderColor: "#FF6709",
          width: '60%',
          height: 70,
          marginVertical: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignSelf: 'center',
        }}>
          
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
    </View>
  );
}

export default Home;