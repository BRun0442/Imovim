import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


import { AntDesign } from '@expo/vector-icons';


export default function ShowingGoingEvent({ handleClose, chatNickname }) {
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

          <ScrollView>

          </ScrollView>

        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
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
    alignItems: "center",

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

    marginLeft: 20
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