import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import { defaultStyle } from '../../../assets/style/style';
import TopBar from '../../TopBar/TopBar';

function Cadastro()
{
  return(
    <View style={{
      backgroundColor: 'white',
      height: '100%',
    }}>
      <TopBar/>
          
    </View>
  );
}

export default Cadastro;