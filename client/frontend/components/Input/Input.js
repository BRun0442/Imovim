import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'

function Input(props)
{
  return(
    <View>
      <TextInput 
        style={styles.Input} 
        placeholder={props.inputText} 
        placeholderTextColor="white" 
      >
      </TextInput>
    </View>
  );
}

export default Input;