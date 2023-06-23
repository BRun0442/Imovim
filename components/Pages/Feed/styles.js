import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
    flex: 1,
  },

  TopBarContainer: {
    width: "100%",
    height: 160,

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

    marginVertical: 10
  },

  changePostsContainer: {
    width: 120,
    height: 50,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 25,
    marginVertical: 5,

    borderRadius: 30,

    backgroundColor: "#E6E6E6",
  },

  optionPostButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 50,
    height: 50,

    borderRadius: 25
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
  },

  content: {
    paddingHorizontal: 5,
    paddingVertical: 20,

    backgroundColor: "#FFF"
  },

  header: {
    display: "flex",
    justifyContent: "center",

    backgroundColor: "#FFF",
    width: "100%",

    borderTopEndRadius: 15,
    borderTopStartRadius: 15,

    paddingHorizontal: 15,
    padding: 10,

    marginBottom: 15
  },

  button: {
    display: "flex",
    flexDirection: "row",

    marginVertical: 4
  },

  headerText: {
    color: "#000",
    fontSize: 21,
    fontWeight: "600",

    marginLeft: 15
  },

  contentContainer: {
    paddingHorizontal: 4,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  authorEvent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 15
  },

  authorTitle: {
    fontSize: 16,

    marginLeft: 8
  },

  author: {
    fontSize: 16,
    fontWeight: "600",
  },

  eventImage: {
    width: "100%",
    height: 300,

    marginBottom: 15
  },

  image: {
    borderRadius: 15,
    height: "100%",
    width: "100%",

    resizeMode: "stretch"
  },

  contentInfo: {
    marginVertical: 15
  },

  dateEvent: {
    display: "flex",
    flexDirection: "row",

    marginVertical: 5
  },

  dateTitle: {
    marginLeft: 15,
    color: "#CB5106",
    fontSize: 20
  },

  date: {
    fontSize: 20
  },

  hourEvent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 5
  },

  hourTitle: {
    marginLeft: 15,
    color: "#CB5106",
    fontSize: 20
  },

  hour: {
    fontSize: 20
  },

  descritpionEvent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',

    marginVertical: 5
  },

  descriptionTitle: {
    marginLeft: 15,
    color: "#CB5106",
    fontSize: 20
  },

  description: {
    fontSize: 20,
    paddingHorizontal: 15,
  },

  locationEvent: {
    display: "flex",
    flexDirection: "column",

    marginVertical: 5,
  },

  locationTitle: {
    width: "100%",

    marginLeft: 15,
    color: "#CB5106",
    fontSize: 20
  },

  locationDataContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 15,
  },

  containerButtons: {
    width: "25%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 5
  },

  buttonCopy: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    marginHorizontal: 5,
    padding: 15,

    backgroundColor: "#F1F1F1",

    borderRadius: 10
  },

  locationData: {
    width: "75%",

    marginVertical: 5
  },

  location: {
    color: "#000",
    fontSize: 20,
  },

  interactiveButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  interactiveButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    backgroundColor: "#F8670E",

    width: 120,
    height: 120,

    borderRadius: 15
  },

  interactiveText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  iGoContainer: {
    width: 30,
    height: 30,

    borderRadius: 100,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: 10,
    right: 10,

    backgroundColor: "#D9D9D9"
  },

  iGo: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600"
  },

});