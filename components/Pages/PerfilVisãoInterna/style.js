import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({

  background: {
    width: "100%",
    height: 200,

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
    width: 140,
    height: 140,
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
    width: 150,
    height: 40,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: '#A512BD',

    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textButtonSeeMore: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,

    marginLeft: 2
  },

  border: {
    width: "100%",
    height: 5,

    backgroundColor: '#A312BB',

    marginTop: 10
  },

  tagsView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    height: 120,
    paddingHorizontal: 10
  },

  tagsContainer: {
    width: "60%",
    height: "100%",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },


  tags: {
    width: 240,
    height: 40,

    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: '#8B8A8B',
    borderRadius: 25,
  },

  tagsText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  editProfileContainer: {
    width: "40%",
    height: "100%",

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },

  editProfile: {
    width: 180,
    height: 75,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: "#FD5F00",

    borderRadius: 20,

    paddingHorizontal: 10,
  },

  editProfileButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  editProfileText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },

  closedButton: {
    width: 30,
    height: 70,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },

  whiteLine: {
    width: "100%",
    height: 1,

    backgroundColor: "#FFF",

    marginVertical: 4
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FF6709",
    width: 40,
    height: 40,

    borderRadius: 40,
  },

  openEdit: {
    width: 50,
    height: 50,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FD5F00",

    borderRadius: 40,
  },

  openEditText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#FF1493',
    marginBottom: 15,
  },

  posts: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },

  alert: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#A6A6A6'
  },
}
)