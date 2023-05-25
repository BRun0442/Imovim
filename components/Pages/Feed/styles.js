import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1
  },

  TopBarContainer: {
    width: "100%",
    height: 90,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFF",
  },

  topBar: {
    width: 200,
    height: 55,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    paddingHorizontal: 25,

    borderRadius: 30,

    backgroundColor: "#FF6709",
  },

  button: {
    padding: 2,
  },

  optionPost: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    height: 80,

    backgroundColor: "#FFF",

    marginTop: 15,
  },

  buttonGlobal: {
    width: "50%",
    height: 80,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonFriends: {
    width: "50%",
    height: 80,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  optionPostButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 150,
    height: 50,

    borderRadius: 25
  },

  optionPostButtonText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  loadingContainer: {
    width: "100%",
    height: 250,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  loading: {
    fontSize: 16,
    
    marginBottom: 15
  }

});