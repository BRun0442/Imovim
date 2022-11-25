import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';
import { defaultStyle } from '../../assets/style/style';
import ProfileImage from '../ProfileImage/ProfileImage';

function TopBar(props)
{
  return(
    <View style={styles.header}>
      <View style={styles.containerProfile}>
        {/* <Text style={styles.logo}>
          II
        </Text> */}
        
        <ProfileImage profileImage={props.profileImage} />
      </View>

      <View style={styles.containerExit}>
        <TouchableOpacity>
          <Text style={styles.smallText}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.photoContainer}>
        <TouchableOpacity styles={styles.button}>
          <Image 
            style={{height: 30, width: 30, resizeMode: 'stretch',}} 
            source={{uri: "https://img.icons8.com/ios-filled/50/FFFFFF/calendar--v1.png"}}
          />
        </TouchableOpacity>

        <TouchableOpacity styles={styles.button}>
          <Image 
            style={{height: 30, width: 30, resizeMode: 'stretch',}} 
            source={{uri: "https://img.icons8.com/ios-filled/50/FFFFFF/compact-camera.png"}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopBar;