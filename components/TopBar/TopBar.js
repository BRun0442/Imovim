import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';
import { defaultStyle } from '../../assets/style/style';

function TopBar()
{
  return(
    <View style={styles.header}>
      <View style={styles.containerProfile}>
        <Text style={styles.title}>
          osmar
        </Text>
      </View>

      <View style={styles.containerExit}>
        <TouchableOpacity>
          <Text style={styles.smallText}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopBar;