import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import api from '../../services/api';

export default function BlockUserModal({ handleClose, name, blocked_user_id, user_id, changeBlock, getUsersBlocked, navigation }, props) {
  const [changeText, setChangeText] = useState(false) // sla
  // const [changeBlock, setChangeBlock] = useState(false) // sla dnv

  const blockUser = async (user_id, blocked_user_id) => {
    const data = { user_id, blocked_user_id }
    await api.post(`/block/block-user`, data)
    .then((res) => {
      navigation.navigate('Página Inicial')
      console.log(res.data.msg);
    })
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.modal}>
        <View style={styles.content}>
          <View style={styles.blockUserContainer}>

            <View style={styles.blockNameUser}>
              <Entypo name="block" size={30} color="#FFF" />

              {
                changeBlock ? (
                  <Text style={styles.blockUserText}>Deseja bloquear</Text>
                )

                  :

                  (
                    < Text style={styles.blockUserText}>Deseja desbloquear</Text>
                  )
              }

              <Text style={styles.exitGroupUserName}>{name}</Text>
              <Text style={styles.blockUserText}>?</Text>
            </View>

            {changeText ?
              (
                < View style={styles.blockAlert}>
                  <Text style={styles.blockUserAlertText}>Ao confirmar, o usuário será bloqueado</Text>
                  <Text style={styles.blockUserAlertText}>Tem certeza?</Text>
                </View>
              )

              :

              (
                < View style={styles.blockAlert}>
                  <Text style={styles.blockUserAlertText}>Ao confirmar, o usuário será desbloqueado</Text>
                  <Text style={styles.blockUserAlertText}>Tem certeza?</Text>
                </View>
              )
            }


          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => {
              blockUser(user_id, blocked_user_id)
              getUsersBlocked()
              handleClose()
            }}>
              <Text style={styles.button1}>
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleClose}>
              <Text style={styles.button2}>
                Não
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  modal: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width: "90%",
    height: "25%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F8670E",

    borderRadius: 30,

    paddingHorizontal: 15
  },

  blockUserContainer: {
    display: "flex",
    flexDirection: "column",
  },

  blockNameUser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    marginBottom: 10
  },

  blockUserText: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 22,

    marginLeft: 10
  },

  blockUserAlertText: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 22,
  },

  exitGroupUserName: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 22,

    marginLeft: 10
  },

  blockAlert: {
    display: "flex",
    justifyContent: "flex-start",

    marginBottom: 10
  },

  buttonsContainer: {
    width: "50%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  button1: {
    color: "#FFF",
    fontSize: 25,
  },

  button2: {
    color: "#FFF",
    fontSize: 25,
    backgroundColor: "#AF1A1A",

    padding: 10,
    borderRadius: 15
  },
})