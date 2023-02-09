import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'



function Button(props)
{
  return(
    <TouchableOpacity style={styles.button} onPress={() => {props.pressFunction()}}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

export default Button;