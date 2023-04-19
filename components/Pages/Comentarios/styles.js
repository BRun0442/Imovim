import { StyleSheet, StatusBar, Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20 : 60

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  header: {
    width: "100%",
    height: "6%",
    
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#A512BD",

    paddingHorizontal: 10,
  },

  likeAndComentsContainer: {
    display: "flex",
    flexDirection: "row",

    position: "absolute",
    left: 10
  },

  shareContainer:{
    position: "absolute",
    right: 10
  },

  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF6709",
  },

  button: {
    flexDirection: "row",
  },

  buttonText: {
    color: "white",
    fontWeight: "500",
    alignSelf: "center",
    fontSize: 15,
    paddingLeft: 5,
  },

  comentsContainer: {
    backgroundColor: "#ededed",

    width: "100%",
    height: "80%",

    paddingHorizontal: 20,
    paddingTop: 25
  },

  writeComentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "10%",

    marginHorizontal: 2
  },

  input: {
    width: "85%",
    height: 50,
    backgroundColor: "#FFF",

    paddingLeft: 15
  },

  buttonSendComment: {
    width: 40,
    height: 40,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 50,

    backgroundColor: "#FF7926",

    marginLeft: 10,
  },

  loadingContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});