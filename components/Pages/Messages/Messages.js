import React from 'react'
import { Text, View, TextInput } from 'react-native';
import Header from '../../Header/Header.js';
import { styles } from './style.js'
import Contact from '../../Contact/Contact.js';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Chat({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={{ paddingHorizontal: 20 }}>

        <View style={styles.topBar}>
          <Ionicons name="chatbubble" size={30} color="#A512BD" />
          <Text style={styles.topBarText}>Chat</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.iconContainer}>
            <Entypo style={{ marginRight: 15 }} name="magnifying-glass" size={25} color="#A512BD" />
          </View>

          <TextInput style={styles.searchInput} placeholder='Pesquisar conversas' />

          <View>
            <MaterialIcons style={styles.addGroupIcon} name="group-add" size={30} color="#A512BD" />
          </View>
        </View>

        <Contact name="Tiago" message="kd vccc??????" />
        <Contact name="Luis" message="eaeeeeeee" />

      </View>
    </View>
  )
}