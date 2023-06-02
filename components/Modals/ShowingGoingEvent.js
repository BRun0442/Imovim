import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import IGoInEvent from '../IGoInEvent/IGoInEvent';
import Loading from '../Loading/Loading';

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
      <Loading
        height={"100%"}
      />
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.modal}>

        <View style={styles.content}>

          <View style={styles.goEventContainer}>
            <Text style={styles.goEventText}>Pessoas que vão:</Text>
            <TouchableOpacity style={styles.iconButton} onPress={handleClose}>
              <AntDesign name="close" size={28} color="#FFF" />
            </TouchableOpacity>
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

    backgroundColor: "#A512BD",

    borderRadius: 30,

    paddingHorizontal: 10
  },

  goEventContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 15,
    paddingHorizontal: 15,

    marginBottom: 25
  },

  goEventText: {
    fontWeight: "bold",
    fontSize: 23,
    color: "#FFF",
  },

  iconButton: {
    position: "absolute",
    right: 0
  }
})