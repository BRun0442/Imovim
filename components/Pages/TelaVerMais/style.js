import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%"

  },

  titleContainer: {
    marginTop: 25,
    marginBottom: 20,

    paddingHorizontal: 15
  },

  title: {
    fontSize: 22,
    fontWeight: "600"
  },

  containerTags: {
    backgroundColor: "#F1F1F1",
    marginHorizontal: 15,
    borderRadius: 15,
    paddingBottom: 15,

    marginBottom: 15
  },

  titleTags: {
    fontSize: 20,
    margin: 10
  },

  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },

  tag: {
    textAlign: "left",
    paddingLeft: 2,
    paddingTop: 1,

    width: 125,
    height: 35,

    margin: 8,

    backgroundColor: "#565353",

    fontSize: 20,
    color: "#FFF",
    fontWeight: "500",

    borderRadius: 15
  },

  containerPhotos: {
    backgroundColor: "#F1F1F1",
    marginHorizontal: 15,
    borderRadius: 15,
    paddingBottom: 15,

    marginBottom: 15
  },

  titlePhotos: {
    fontSize: 20,
    margin: 10
  },

  photos:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  photo: {
    width: 80,
    height: 80,

    borderRadius: 15,

    margin: 5,
    marginHorizontal: 8,

    backgroundColor: "#D9D9D9"
  },

  containerEvents: {
    backgroundColor: "#F1F1F1",
    marginHorizontal: 15,
    borderRadius: 15,
    paddingBottom: 15,

    marginBottom: 15
  },

  titleEvents: {
    fontSize: 20,
    margin: 10
  },

  events: {
    width: "90%",
    height: 28,

    fontSize: 16,

    margin: 10,
    marginHorizontal: 15,
    paddingLeft: 10,

    backgroundColor: "#FFF",
    borderRadius: 15
  }



})