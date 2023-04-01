import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import { Ionicons } from '@expo/vector-icons';


export default function ComplaintGroup({ handleClose, deletePost }, props) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose}></TouchableOpacity>

      <View style={styles.modal}>
        <TouchableOpacity style={styles.closedButtonLeft} onPress={handleClose}></TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.exitGroup}>
            <Ionicons name="alert-circle" size={30} color="#FFF" />
            <Text style={styles.exitGroupText}>Deseja denunciar o grupo {props.groupName}?</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Text style={styles.button1}>
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.button2}>
                Não
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        <TouchableOpacity style={styles.closedButtonRight} onPress={handleClose}></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.closedButtonBottom} onPress={handleClose} ></TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  modal: {
    width: "100%",
    height: "15%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  closedButtonTop: {
    height: "80%",
    zIndex: 9,
  },

  closedButtonBottom: {
    height: "10%",
    zIndex: 9,
  },

  closedButtonLeft: {
    width: "27.5%",
    height: "100%",
  },

  closedButtonRight: {
    width: "27.5%",
    height: "100%",
  },


  content: {
    width: "90%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#DB3232",

    borderRadius: 30,

    paddingHorizontal: 15
  },

  exitGroup: {
    display: "flex",
    flexDirection: "row",
  },

  exitGroupText: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 22,

    marginLeft: 10
  },

  buttonsContainer:{
    width: "50%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",    
  },

  button1: {
    color: "#FFF",
    fontSize: 22,
  },

  button2: {
    color: "#FFF",
    fontSize: 22,
    backgroundColor: "#AF1A1A",

    padding: 8,
    borderRadius: 15
  },
})