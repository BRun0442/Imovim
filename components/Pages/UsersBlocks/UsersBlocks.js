import React, {useState, useEffect, useContext} from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../Header/Header'
import { styles } from './style.js'
import UserBlock from '../../UserBlock/UserBlock'

export default function UsersBlocks() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Usuários Bloqueados</Text>
      </View>

      <View style={styles.containerScroll} >
        <ScrollView style={styles.scroll}>
          <UserBlock />
        </ScrollView>
      </View>
    </View>
  )
}