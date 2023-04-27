import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({

  background: {
    width: "100%",
    height: 180,

    backgroundColor: "#D9D9D9",
  },

  icons: {
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    paddingHorizontal: 20
  },

  iconCam: {
    width: 140,
    height: 140,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#D9D9D9",

    borderRadius: 100,
    borderColor: "#FFF",
    borderWidth: 3,

    marginTop: -60
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

    marginVertical: 10,

    paddingHorizontal: 25
  },

  data: {
    textAlign: "left",
  },

  name: {
    fontWeight: "bold",
    fontSize: 20
  },

  location: {
    fontSize: 15
  },

  buttonSeeFriends: {
    width: 180,
    height: 40,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#A512BD",

    borderRadius: 40,
  },

  textButtonSeeFriends: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,

    marginLeft: 5
  },

  border: {
    width: "100%",
    height: 5,

    backgroundColor: "#A312BB",

    marginTop: 10
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

  tagsView: {
    width: "100%",
    height: 120,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    paddingHorizontal: 5,
  },

  tagsContainer: {
    width: "80%",
    height: "100%",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },

  addFavoriteSports: {
    width: 145,
    height: 55,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: "#8B8A8B",
    borderRadius: 40,

    marginRight: 2,
  },

  addFavoriteSportsText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },

  editProfileContainer: {
    width: "20%",
    height: "100%",

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },

  editProfile: {
    width: 190,
    height: 90,

    display: "flex",
    flexDirection: "row",

    backgroundColor: "#FD5F00",

    borderRadius: 20,

    paddingHorizontal: 5
  },

  editProfileButtonContainer: {
    width: 130,
    height: 90,

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",

    paddingStart: 5
  },

  editProfileButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },

  editProfileText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8
  },

  closedButton: {
    width: 45,
    height: 90,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  whiteLine: {
    width: "100%",
    height: 1,

    backgroundColor: "#FFF",

    marginVertical: 5
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
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#FF1493",
    marginBottom: 15,
  },

  posts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  alert: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#A6A6A6"
  },
}
)