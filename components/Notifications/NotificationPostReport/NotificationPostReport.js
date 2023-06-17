import React from 'react'
import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native'
import { styles } from './style'

import Logo from './img/Logo.png'

export default function NotificationPostReport() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.iconCam}
        source={Logo}
      />

      <View style={styles.textContainer}>
        <Text style={styles.textName}>Imovim</Text>

        <View style={styles.notificationContainer}>
          <Text style={styles.textNotifcation}>Uma de suas postagens foi removida por ir contra os termos de nossa aplicação.</Text>
        </View>

        <Text style={styles.textTime}>Agora</Text>
      </View>
    </View>
  )
}