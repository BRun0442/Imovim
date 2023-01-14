import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({

  container: {
    backgroundColor: "#fff",
  },

  background: {
    height: 100,
    backgroundColor: "#d9d9d9",
  },

  logo: {
    position: 'absolute',

    // Alinha verticalmente
    justifyContent: 'center',

    //Alinha horizontalmente
    alignSelf: 'center',

    fontSize: 50,
    color: '#FF6709',
    zIndex: 1,
  },

  perfil: {
    marginTop: -60,
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 20,
    paddingEnd: 20,
  },

  iconCam: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    backgroundColor: "#d9d9d9",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 5
  },

  iconPencil: {
    marginRight: 10,
    marginTop: 5
  },

  infos: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
    paddingStart: 25,
    paddingEnd: 25,
  },

  data: {
    textAlign: "left"
  },

  name: {
    fontWeight: "bold",
    fontSize: 20
  },

  location: {
    fontWeight: "bold",
    fontSize: 12
  },

  buttonSeeMore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#A512BD',
    width: 120,
    height: 30,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textButtonSeeMore: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 2
  },

  border: {
    width: '100%',
    height: 2,
    borderRadius: 10,
    backgroundColor: '#A512BD',
    marginTop: 10
  },

  tagsView: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
  },

  tags: {
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#A6A6A6',
    width: 260,
    height: 30,
    fontWeight: 'bold',
    fontSize: 14,
    borderRadius: 10,
    padding: 5,
    color: '#fff'
  },

  button: {
    backgroundColor: "#FF6709",
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 400,
    justifyContent: "center",
    alignSelf: 'center',
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  posts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'column',
  },

  alert: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#A6A6A6'
  },
}
)