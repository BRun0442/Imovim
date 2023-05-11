import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, Modal } from 'react-native'
import Header from '../../Header/Header'
import { styles } from './style.js'
import UserBlock from '../../UserBlock/UserBlock'
import api from '../../../services/api.js'
import { AuthContext } from '../../../contexts/auth'
import BlockUserModal from '../../Modals/BlockUserModal'

export default function UsersBlocks() {
  const [usersBlocked, setUsersBlocked] = useState(null)
  const { id } = useContext(AuthContext)

  const getUsersBlocked = async (user_id) => {
    const data = await api.get(`/block/get-blocked-users/${user_id}`)
      .then((res) => {
        console.log(res.data);
        setUsersBlocked(res.data)
        return res.data
      })
  }

  const getData = async () => {
    const data = getUsersBlocked(id)
    setUsersBlocked(await data)
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
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Usuários Bloqueados</Text>
      </View>

      <View style={styles.containerScroll} >
        <ScrollView style={styles.scroll}>
          {usersBlocked.map((user, index) => {
            return (
              <UserBlock key={index} getUsersBlocked={getUsersBlocked} nickname={user.nickname} profileImage={user.profileImage} />
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}