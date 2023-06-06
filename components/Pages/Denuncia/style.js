import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    width: "100%",

    paddingHorizontal: 10,
    paddingVertical: 25
  },

  title: {
    fontSize: 18,
    fontWeight: "600"
  },

  content: {
    width: "100%",

    paddingHorizontal: 7,
  },

  optionsComplaint: {
    backgroundColor: "#F1F1F1",

    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10
  },

  titleComplaint: {
    fontSize: 18,
    fontWeight: "600",

    marginVertical: 15
  },

  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    marginVertical: 5
  },

  infoText: {
    fontSize: 18,
    marginVertical: 8
  },

  buttonView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 25
  },

  complaintButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#DB3232",

    width: "50%",
    height: 55,

    borderRadius: 15,
  },

  complaintText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold"
  },

  checkBoxContainer: {
    width: 20,
    height: 20,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 15,

    backgroundColor: "#FFF",

    marginRight: 10,
  },

  checkBox: {
    width: 12,
    height: 12,
    borderRadius: 15
  }
})