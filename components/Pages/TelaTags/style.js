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

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    height: "10%",

    paddingHorizontal: 10,

    backgroundColor: "#FFF"

  },

  title: {
    fontSize: 18,
    fontWeight: "600"
  },

  containerTags: {
    width: "100%",

    paddingHorizontal: 8,
    paddingVertical: 15,
  },

  tags: {
    width: "100%",
    height: "100%",

    borderRadius: 15,
    
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    flexWrap: "wrap",

    paddingVertical: 30,

    backgroundColor: "#F1F1F1",
  },
})

