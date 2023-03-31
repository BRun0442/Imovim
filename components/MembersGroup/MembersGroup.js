import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import { styles } from './style';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function DadosGrupo(props) {
  return (
    <View style={styles.infoMemberContainer}>

      <View style={styles.infoMember}>
        <View style={styles.photoMember}>
          <FontAwesome name="camera" size={22} color="#FFF" />
          {/* <Image /> */}
        </View>

        <Text style={styles.membersName}>{props.memberName}</Text>
      </View>

      <View style={styles.icons}>
        <MaterialIcons style={{ marginRight: 10 }} name="person-remove" size={35} color="#FF7926" />
        <Ionicons name="chatbubble" size={30} color="#FF7926" />
      </View>

    </View>
  )
}