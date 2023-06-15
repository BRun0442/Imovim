import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postImage: {
    width: "100%",
    alignSelf: "center",
    // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
    resizeMode: "contain",
  },

  postContainer: {
    marginBottom: 15,

    backgroundColor: "#F1F1F1",
    
    elevation: 5,
  },
  
  post: {
    width: "100%",
    
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E98AF9",
    
    backgroundColor: "#FFF",
    
    paddingVertical: 15,
    paddingHorizontal: 15,

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
    alignItems: "center",
    flexDirection: "row",

    marginVertical: 15,
    // paddingHorizontal: 15
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

  complaintButton: {
    width: 25,
    height: 25,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

    zIndex: 0
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

  editPhotoOptions: {
    width: 230,
    height: 110,
    
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
    borderRadius: 20,

    backgroundColor: "#FF7926",

    position: "absolute",
    right: 0,

    zIndex: 1
  },

  options: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  option: {
    width: 180,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 12,
  },

  textButton: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",

    marginLeft: 15
  },

  closeIcon:{
    width: 40,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  line: {
    backgroundColor: "#983A00",
    width: "100%",
    height: 2,

    marginVertical: 6
  }

});