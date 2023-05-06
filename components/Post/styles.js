import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postImage: {
    width: "100%",
    alignSelf: "center",
    // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
    resizeMode: "contain",
  },

  postContainer: {
    paddingVertical: 15,

    backgroundColor: "#F1F1F1"
  },

  post: {
    width: "100%",

    borderTopWidth: 1,
    borderColor: "#E98AF9",

    backgroundColor: "#FFF",

    paddingVertical: 15,
    paddingHorizontal: 15
  },

  singlePostContainer: {
    width: "100%",

    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E98AF9",

    backgroundColor: "#FFF",

    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 15
  },

  userInfoContainer: {
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 10
  },

  profileContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  profileName: {
    fontWeight: "500",
    fontSize: 16
  },

  postDate: {
    fontWeight: "300",
    fontSize: 15
  },

  complaint: {
    fontWeight: "600",
    fontSize: 20
  },

  postDescription: {
    fontWeight: "500",
    fontSize: 16,

    marginVertical: 15
  },

  postInteraction: {
    width: 250,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },

  postInteractionImage: {
    height: 50,
    width: 50,
    backgroundColor: "#A512BD",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  interactionQuantity: {
    position: "absolute",
    color: "black",
    fontWeight: "400",
    top: 30,
    left: -5,
    backgroundColor: "#DCDCDC",
    borderRadius: 20,
    minHeight: 22,
    minWidth: 22,
    textAlign: "center",
  },
});