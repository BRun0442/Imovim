import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'

function Input(props)
{
  return(
    <View>
      <TextInput 
        style={styles.input} 
        placeholder={props.inputText} 
        placeholderTextColor="#DCDCDC" 
        width={props.width}
        textAlign={props.textAlign}
      >
      </TextInput>
    </View>
  );
}

export default Input;