import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DeleteEventModal({ handleClose, name, deleteEvent }) {

  return (
    <View style={styles.container}>

      <View style={styles.modal}>

        <View style={styles.content}>

          <View style={styles.deleteEventModalContainer}>

            <MaterialIcons name="delete" size={30} color="#FFF" />
            <Text style={styles.deleteEventModalText}>Deseja deletar</Text>
            <Text style={styles.exitGroupUserName}>{name}</Text>
            <Text style={styles.deleteEventModalText}>?</Text>

          </View>

          <View style={styles.buttonsContainer}>

            <TouchableOpacity onPress={() => deleteEvent()}>
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

    </View >
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

    paddingHorizontal: 15
  },

  content: {
    width: "100%",
    height: 200,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F8670E",

    borderRadius: 30,
  },

  deleteEventModalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 15
  },

  deleteEventModalText: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 22,

    marginLeft: 5,
    marginVertical: 2
  },

  exitGroupUserName: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 22,

    marginLeft: 5
  },

  buttonsContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  button1: {
    color: "#FFF",
    fontSize: 25,

    marginHorizontal: 15
  },

  button2: {
    color: "#FFF",
    fontSize: 25,
    backgroundColor: "#AF1A1A",

    padding: 10,
    borderRadius: 15,

    marginHorizontal: 15
  },
})