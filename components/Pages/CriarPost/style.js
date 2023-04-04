import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: "120%",

    backgroundColor: '#FFF', 
  },

  photoContainer: {
    height: 55,
    width: 200,
    borderRadius: 30,
    backgroundColor: "#FF6709",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "3%",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",

    marginBottom: "5%",    
    paddingHorizontal: 20,

    marginTop: 40
  },

  button: {
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

  postContainer: {
    alignSelf: "center",
    width: "100%",

    paddingHorizontal: 10
  },

  postProfile: {
    height: 48,
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "3%",
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

  emptyPhoto:{
    width: "100%", 
    height: 300, 

    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    
    backgroundColor: "#C6C4C4", 
    marginVertical: 20
  },

  emptyPhotoText:{
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

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",

    fontSize: 18,
    width: "100%",

    fontWeight: "400",
    
    marginTop: 10,

    padding: 5
  }
})