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
        <StatusBar style="auto" />
      </View>
    );
  }
  