import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
  },

  containerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    paddingStart: 10,
    paddingEnd: 10,

    marginTop: 15
  },

  title: {
    width: "70%"
  },

  text: {
    fontSize: 18
  },

  containerTags: {
    paddingHorizontal: 8,

    marginTop: 18,

    paddingHorizontal: 15
  },

  tags: {
    height: "100%",
    backgroundColor: "#F1F1F1",
    borderRadius: 15,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",

    paddingTop: 15,
  },
})

