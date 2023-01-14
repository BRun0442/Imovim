import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  photoContainer: {
    flexWrap: 'wrap',
    height: 55,
    width: 200,
    padding: 5,
    paddingHorizontal: 25,
    borderRadius: 30,
    backgroundColor: '#FF6709',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },

  buttons: {
    marginBottom: '5%',
    height: 200
  },

  button: {
    width: 400,
    height: 45,
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#750E86',
    flexDirection: 'row',
    paddingStart: '5%'
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: '3%'
  },

  postContainer: {
    alignSelf: 'center',
    marginBottom: '10%',
    width: 350,
    height: 300
  },

  postProfile: {
    height: 48,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '3%',
  },

  postImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
  },

  profileName: {
    fontWeight: '500',
    marginLeft: 12
  },

  postDate: {
    fontWeight: '300',
  },

  profileImage: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },

  coment: {
    textAlign: 'center'
  }

}
)