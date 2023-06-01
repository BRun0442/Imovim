import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import IGoInEvent from '../IGoInEvent/IGoInEvent';

import { AntDesign } from '@expo/vector-icons';

import { getUsersWhoGo } from '../../services/events';


export default function ShowingGoingEvent({ handleClose, event_id }) {
  const [usersWhoGo, setUsersWhoGo] = useState(null)

  const handleData = async () => {
    const data = await getUsersWhoGo(event_id)
    setUsersWhoGo(data)
  }

  useEffect(() => {
    handleData()
  }, [event_id])

  if (!usersWhoGo) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.modal}>

        <View style={styles.content}>

          <View style={styles.goEventContainer}>
            <TouchableOpacity onPress={handleClose}>
              <AntDesign name="closecircle" size={30} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.goEventText}>Pessoas que vão:</Text>
          </View>

          <FlatList 
            data={usersWhoGo}
            renderItem={({ item }) => 
              <IGoInEvent name={item.nickname} profileImage={item.profileImage} />
          }
          />

        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  modal: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 15
  },

  content: {
    width: "100%",
    height: "60%",

    display: "flex",
    justifyContent: "center",

    backgroundColor: "#D9D9D9",

    borderRadius: 30,

    paddingHorizontal: 15
  },

  goEventContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    marginVertical: 15,

    marginBottom: 10
  },

  goEventText: {
    fontWeight: "bold",
    fontSize: 23,
    color: "#FFF",

    marginLeft: 20,
    marginBottom: 15
  }
})