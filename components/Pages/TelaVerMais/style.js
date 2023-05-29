import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
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
    width: "100%",

    borderRadius: 15,

    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,

    backgroundColor: "#F1F1F1",

    elevation: 4,
  },

  titleTags: {
    fontSize: 20,
    marginVertical: 5
  },

  tags: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    
    flexWrap: "wrap",
  },

  containerPhotos: {
    width: "100%",

    borderRadius: 15,

    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,

    backgroundColor: "#F1F1F1",

    elevation: 4,
  },

  containerPhotoTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titlePhotos: {
    fontSize: 20,
    marginBottom: 5
  },

  seeMorePhotos: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8670E"
  },

  photos: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  containerEvents: {
    width: "100%",

    borderRadius: 15,

    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,

    backgroundColor: "#F1F1F1",

    elevation: 2,
  },

  containerEventsTitle: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  titleEvents: {
    fontSize: 20,

    marginTop: 5,
    marginBottom: 15
  },

  seeMoreEvents: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8670E",

    backgroundColor: "red"
  },

  events: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  photo: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",

    flexWrap: "wrap",
    flex: 1 / 3
  }
})