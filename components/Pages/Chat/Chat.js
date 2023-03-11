import React from 'react'
import { Text, View, TextInput } from 'react-native';
import Header from '../../Header/Header.js';
import { styles } from './style.js'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Chat({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Ionicons name="chatbubble" size={30} color="#A512BD" />
          <Text style={styles.topBarText}>Chat</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder='Pesquisar conversas'>
            <Entypo style={{ marginRight: 15 }} name="magnifying-glass" size={25} color="#A512BD" />
          </TextInput>

          <View>
            <MaterialIcons style={styles.addGroupIcon} name="group-add" size={30} color="#A512BD" />
          </View>
        </View>

        <View style={styles.messageContainer}>
          <View style={styles.message}>
            <View style={styles.camContainer}>
              <FontAwesome name="camera" size={24} color="#FFF" />
            </View>

            <View style={styles.messageItems}>
              <View style={styles.messageTexts}>
                <Text>Nome Sobrenome</Text>
                <Text>Mensagem</Text>
              </View>

              <View style={styles.notification}></View>
            </View>

          </View>
        </View>

      </View>
    </View>
  )
}