import React, { useContext, useEffect, useState } from 'react'
import { Text, View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Header from '../../Header/Header.js';
import { styles } from './style.js'
import Contact from '../../Contact/Contact.js';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../../contexts/auth.js';
import axios from 'axios';

export default function Chat({ navigation }) {
  const { id, chats, setChats, reloadChats } = useContext(AuthContext)

  const getChats = async () => {
    const result = await axios.get(`https://imovim-api.cyclic.app/chat/get-users-room/${id}`)
    console.log(result.data)
    setChats(result.data)
  }

  useEffect(() => {
    getChats()
  }, [reloadChats])

  if (!chats) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
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

        </View>

        <ScrollView style={{ paddingHorizontal: 20, marginBottom: 20 }}> 
          {chats.map((chat, index) => {
            return (
              <Contact key={index}
                name={chat.friend}
                room_id={chat.room_id}
                friend_photo={chat.friendPhoto}
                room_photo={chat.roomPhoto}
                room_type={chat.room_type}
                room_name={chat.room_name}
                navigation={navigation} />
            )
          })}
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}