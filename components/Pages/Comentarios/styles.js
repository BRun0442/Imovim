import { StyleSheet, StatusBar, Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20 : 60

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },


  header: {
    backgroundColor: '#A512BD',
    height: "10%",
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
  },

  likeAndComents: {
    width: '45%',

    flex: 1,
    flexDirection: 'row',
  },

  button: {
    flexDirection: 'row',
  },

  buttonText: {
    color: 'white',
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: 15,
    paddingLeft: 5,
  },

  comentsContainer: {
    backgroundColor: '#ededed',

    height: "75%",
  },

  writeComentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "10%",

    marginBottom: 50,

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