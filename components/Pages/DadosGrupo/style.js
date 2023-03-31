import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  titleContainer: {
    display: "flex",
    justifyContent: "center",

    height: "5%",

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
    height: "20%",

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
    height: "10%",

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
    height: "40%",

    paddingHorizontal: 15,
    paddingVertical: 5,

    borderRadius: 20,
  },

  titleContainerMembers: {
    height: "10%",

    marginVertical: 15
  },

  titleMembers: {
    fontSize: 22,
    fontWeight: "600"
  },

  memberListView: {
    height: "80%"
  },

  closedButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "10%"
  },

  closedButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 300,
    height: 50,

    backgroundColor: "#DB3232",

    borderRadius: 30,
  },

  textButton: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold"
  }
})