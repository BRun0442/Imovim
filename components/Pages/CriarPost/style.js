import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },

  photoContainer: {
    width: 200,
    height: 55,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",

    paddingHorizontal: 25,
    marginTop: 25,

    borderRadius: 30,

    backgroundColor: "#FF6709",
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",

    fontSize: 20,
    width: "100%",

    fontWeight: "400",

    marginVertical: 15,

    padding: 5
  },

  captionLengthText: {
    fontSize: 16,
    fontWeight: "400",
    alignSelf: "flex-end",

    paddingHorizontal: 5
  },

  optionsContainer: {
    display: "flex",
    justifyContent: "center",

    marginVertical: 35,

    paddingHorizontal: 20,

  },

  option: {
    width: "100%",
    height: 45,

    marginBottom: 15,

    borderRadius: 20,

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: "#750E86",
    paddingStart: "5%"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
    marginLeft: "3%"
  },

  submitButton: {
    backgroundColor: "#FF6709",
    width: 175,
    height: 50,
    
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: 'center',

    marginBottom: 50
  },

  submitText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },

  postContainer: {
    width: "100%",
    alignSelf: "center",

    paddingHorizontal: 10
  },

  postProfile: {
    width: "100%",
    height: 50,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 5,

    marginTop: 10,
    marginBottom: 25
  },

  postImage: {
    height: 400,
    width: 350,
    alignSelf: "center",

    // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
    resizeMode: "contain",
  },

  profileName: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 12
  },

  emptyPhoto: {
    width: "100%",
    height: 200,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#C6C4C4",
    marginVertical: 20
  },

  emptyPhotoText: {
    fontSize: 21,
    color: "#FFF",
    fontWeight: "600"
  },

  postDate: {
    fontWeight: "300",
  },

  profileImage: {
    // height: 200,
    // width: 200,
    resizeMode: "stretch",
  },

  coment: {
    textAlign: "center"
  },

})