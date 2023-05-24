import React from "react";
import { View, Text, Image } from 'react-native'
import { styles } from './style'
import { Entypo } from '@expo/vector-icons';

export default function FriendMessage(props) {
  return (
    <View>
      <View style={styles.memberInfo}>
        <View style={styles.iconCam}>
          <Image style={styles.iconCam} source={{ uri: props.profileImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }} />
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