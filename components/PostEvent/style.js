import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    backgroundColor: '#FFF',

    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E98AF9',

    paddingVertical: 15,
    marginBottom: 15,

    elevation: 10
  },

  postProfile: {
    width: "100%",
    height: 50,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10
  },

  profileContainer: {
    marginLeft: 10
  },

  profilePost: {
    display: "flex",
    flexDirection: "row",
  },

  profileName: {
    fontSize: 15,
    fontWeight: '500',
    marginRight: 5
  },

  newEvent: {
    color: "#F8670E",
    fontWeight: "bold",
    fontSize: 15
  },

  postImage: {
    width: '100%',
    alignSelf: 'center',
    // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
    resizeMode: 'contain',
  },

  profileImage: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },

  postDate: {
    fontWeight: '300',
  },

  descriptionEvent: {
    color: "#000"
  },

  interactiveButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    marginTop: 15
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

    textAlign: "center"
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