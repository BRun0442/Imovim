import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({

  background: {
    height: 80,
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

  iconsContainer: {
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
    width: 140,
    height: 140,
    backgroundColor: "#d9d9d9",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 5
  },

  profileImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
    borderRadius: 100
  },

  addFriendContainer: {
    display: "flex",
    flexDirection: "column",
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

  followButton: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: '#A512BD',

    width: 170,
    height: 40,

    borderRadius: 40,

    marginTop: 80
  },

  addFriendsIcons: {
    display: "flex",
    flexDirection: "row",
  },

  addFriendText: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10
  },

  iconsActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  border: {
    width: '100%',
    height: 5,
    borderRadius: 10,
    backgroundColor: '#A512BD',
    marginTop: 10
  },

  tagsText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  tagsView: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 25,
  },

  tags: {
    width: 240,
    height: 40,

    display: 'flex',
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: '#8B8A8B',
    borderRadius: 25,

    marginVertical: 15
  }
})