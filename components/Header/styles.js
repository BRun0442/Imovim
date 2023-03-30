import { StyleSheet, StatusBar } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    
    backgroundColor: '#A512BD',

    paddingHorizontal: 10
  },

  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    
  },

  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF6709',
  },

  containerIcons: {
    display: "flex",
    flexDirection: "row"
  },

  icon: {
    paddingRight: 4
  }
});