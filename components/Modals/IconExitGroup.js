import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import { AntDesign } from '@expo/vector-icons';


export default function IconExitGroup({ handleClose, chatNickname }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modal}>

        <View style={styles.content}>
          <View style={styles.exitGroup}>
            <TouchableOpacity onPress={handleClose}>
              <AntDesign name="closecircle" size={30} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.exitGroupText}>Deseja sair do {chatNickname}</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity>
              <Text style={styles.textButton1}>
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleClose}>
              <Text style={styles.textButton2}>
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
    width: "100%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  modal: {
    width: "100%",
    height: "15%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width: "95%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F8670E",

    borderRadius: 30,

    paddingHorizontal: 15
  },

  exitGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",

    marginBottom: 10
  },

  exitGroupText: {
    fontWeight: "bold",
    fontSize: 23,
    color: "#FFF",

    marginLeft: 10
  },

  buttons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",

    width: "50%",

    borderRadius: 20,
  },

  textButton1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF"
  },

  textButton2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",

    backgroundColor: "#CB5106",

    padding: 10,

    borderRadius: 15
  },

  button: {
    display: "flex",
    flexDirection: "row",

    paddingHorizontal: 12,
    marginVertical: 2
  },

  textButton: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",

    paddingLeft: 10
  },

  line: {
    backgroundColor: "#983A00",
    width: "100%",
    height: 2,

    marginVertical: 5
  }

})