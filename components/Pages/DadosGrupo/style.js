import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  titleContainer: {
    marginTop: 25,
    marginBottom: 20,

  },

  title: {
    fontSize: 22,
    fontWeight: "600"
  },

  dataGroup: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: "#F1F1F1",

    width: "100%",

    paddingHorizontal: 25,
    paddingVertical: 15,

    borderRadius: 20,

    marginBottom: 25
  },

  photoGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 130,
    height: 130,

    borderRadius: 100,

    backgroundColor: "#FFF",

    marginRight: 15
  },

  groupName: {
    fontWeight: "600",
    fontSize: 20
  },

  icon: {
    position: "absolute",

    right: 15,
    top: 15
  },

  descGroup: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: "#F1F1F1",

    width: "100%",

    paddingHorizontal: 25,
    paddingVertical: 15,

    borderRadius: 20,

    marginBottom: 20
  },

  describeTitle: {
    fontWeight: "bold",
    fontSize: 20
  },

  describe: {
    fontSize: 18,
    fontWeight: "400",
  },

  members: {
    display: "flex",

    flexDirection: "column",

    backgroundColor: "#F1F1F1",

    width: "100%",

    paddingHorizontal: 15,
    paddingVertical: 15,

    borderRadius: 20,

    marginBottom: 25
  },

  photoMember: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 110,
    height: 110,

    borderRadius: 100,

    backgroundColor: "#D9D9D9",

    borderWidth: 6,
    borderColor: "#FFF",

    marginRight: 15
  },

  infoMemberContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  infoMember:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  membersName:{
    fontSize: 18 
  },

  icons:{
    display: "flex",
    flexDirection: "row",
  },

  closedButtonContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  closedButton:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 300,
    height: 60,

    backgroundColor: "#DB3232",

    borderRadius: 30
  },

  textButton:{
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold"
  }

})