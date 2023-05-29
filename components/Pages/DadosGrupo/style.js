import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },

  titleContainer: {
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    marginVertical: 25,
  },

  title: {
    fontSize: 20,
    fontWeight: "600"
  },

  addNewMember: {
    width: 50,
    height: 50,

    padding: 10,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F1F1F1",

    borderRadius: 50,
  },

  addNewMemberText: {
    fontSize: 16
  },

  dataGroup: {
    width: "100%",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: "#F1F1F1",

    padding: 15,

    borderRadius: 20,

    marginBottom: 25,

    elevation: 5,
  },

  photoGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 125,
    height: 125,

    borderRadius: 100,

    backgroundColor: "#FFF",

    marginRight: 15
  },

  groupNameText:{
    fontSize: 20
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

    padding: 20,

    borderRadius: 20,

    marginBottom: 20,

    elevation: 5,
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
    paddingVertical: 5,

    borderRadius: 20,

    elevation: 5,
  },

  titleContainerMembers: {
    padding: 10
  },
  
  titleMembers: {
    fontSize: 22,
    fontWeight: "600",

    marginVertical: 5,
  },

  closedButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",

    marginVertical: 15
  },

  closedButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 300,
    height: 50,

    backgroundColor: "#DB3232",

    borderRadius: 30,

    marginVertical: 25
  },

  textButton: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold"
  }
})