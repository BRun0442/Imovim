import React, { useState, useEffect, useContext } from 'react'
import { View, Text, RefreshControl, FlatList } from 'react-native'
import { styles } from './style.js'

import Header from '../../Header/Header'
import UserBlock from '../../UserBlock/UserBlock'

import api from '../../../services/api.js'
import { AuthContext } from '../../../contexts/auth'

export default function UsersBlocks({ navigation }) {
  const [usersBlocked, setUsersBlocked] = useState(null)
  const [refreshing, setRefreshing] = useState(false);
  const { id } = useContext(AuthContext)

  const getUsersBlocked = async (user_id) => {
    const data = await api.get(`/block/get-blocked-users/${user_id}`)
      .then((res) => {
        console.log(res.data);
        setUsersBlocked(res.data)
        return res.data
      })
  }

  const handleRefresh = () => {
    setRefreshing(true);
      setTimeout(async () => {
        getUsersBlocked(id)
        setRefreshing(false);
      }, 2000)
  }

  useEffect(() => {
    // getData()
    getUsersBlocked(id)
  }, [])

  if (!usersBlocked) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Usuários Bloqueados</Text>
      </View>

      <View style={styles.containerScroll} >
        <FlatList style={styles.scroll}
          data={usersBlocked}
          keyExtractor={item => item.id}
          ListEmptyComponent={<View><Text>Nenhum usuário bloqueado</Text></View>}
          renderItem={({ item }) => 
          <UserBlock getUsersBlocked={getUsersBlocked} nickname={item.nickname} profileImage={item.profileImage} blocked_user_id={item.user_id} navigation={navigation} />
        }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      </View>
    </View>
  )
}