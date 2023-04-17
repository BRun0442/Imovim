import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({ 
  comentContainer: {
    width: "100%",

    backgroundColor: "#FFF",

    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },

  comentProfile: {
    height: 55,

    display: "flex",
    alignItems: "center",
    flexDirection: "row",

    marginBottom: 10,
  },

  coment: {
    marginTop: 5,
    marginLeft: 15,

    fontWeight: "500",
    fontSize: 15
  },

  profileImage: {
    height: 50,
    width: 50,
    resizeMode: "stretch",
  },

  profileName: {
    fontWeight: "500",
  },

  daysAgo: {
    fontWeight: "400",
    color: "gray"
  },

  icons:{
    display: "flex",
    flexDirection: "row"
  },

  profileContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
});