import React from "react";
import { View, Text } from "react-native"
import { styles } from './style.js'

import { Entypo } from '@expo/vector-icons';
import ProfileImage from ".././ProfileImage/ProfileImage"

export default function UserBlock({ nickname, profileImage }) {
  return (
    <View style={styles.container}>

      <View style={styles.userInfo}>
        <ProfileImage profileImage={profileImage} />
        <Text style={styles.name}>{nickname}</Text>
      </View>

      <View>
        <Entypo name="block" size={24} color="#FF7926" />
      </View>

    </View>
  )
}