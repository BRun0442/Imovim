import React from "react";
import { View, Text } from "react-native"
import { styles } from './style.js'

import { Entypo } from '@expo/vector-icons';
import ProfileImage from ".././ProfileImage/ProfileImage"

export default function UserBlock() {
  return (
    <View style={styles.container}>

      <View style={styles.userInfo}>
        <ProfileImage />
        <Text style={styles.name}>User Name</Text>
      </View>

      <View>
        <Entypo name="block" size={24} color="#FF7926" />
      </View>

    </View>
  )
}