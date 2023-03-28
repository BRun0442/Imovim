import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({

  container: {
    // flex: 1,
    // backgroundColor: "#FFF",
  },

  photoContainer: {
    height: 55,
    width: 200,
    borderRadius: 30,
    backgroundColor: '#FF6709',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },

  buttons: {
    marginBottom: '5%',
    height: 200,
    
    display: "flex",
    // alignItems: "center",

    paddingHorizontal: 30
  },

  button: {
    width: 400,
    height: 45,
    
    marginBottom: 15,

    borderRadius: 20,

    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',

    backgroundColor: '#750E86',
    paddingStart: '5%'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: '3%'
  },

  postContainer: {
    alignSelf: 'center',
    width: '85%',
  },

  postProfile: {
    height: 48,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '3%',
  },

  postImage: {
    height: 400, 
    width: 350,
    alignSelf: 'center',

    // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
    resizeMode: 'contain',
  },

  profileName: {
    fontWeight: '500',
    marginLeft: 12
  },

  postDate: {
    fontWeight: '300',
  },

  profileImage: {
    // height: 200,
    // width: 200,
    resizeMode: 'stretch',
  },

  coment: {
    textAlign: 'center'
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    fontSize: 18,
    width: '100%',
    // height: height * 35,
    // minHeight: 50,
    // maxHeight: 250,
    fontWeight: '400',
    // alignSelf: 'center',
    marginBottom: 50,
    marginTop: 10,
  }
})