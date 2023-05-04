import React from "react";
import { View, Text } from 'react-native'
import { styles } from './style'
import { Entypo } from '@expo/vector-icons';

export default function FriendMessage(props) {
  return (
    <View>
      <View style={styles.memberInfo}>
        <View style={styles.iconCam}>
          <Entypo name="camera" size={14} color="#FFF" />
        </View>

        <Text style={styles.nameUser}>{props.user}</Text>
      </View>


      <View style={styles.friendMessage}>
        <Text style={styles.friendMessageText}>{props.message}</Text>
      </View>

      <Text style={styles.hour}>{props.hour}</Text>

    </View>
  )
}