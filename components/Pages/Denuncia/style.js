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

    paddingHorizontal: 10,
  },

  optionsComplaint: {
    backgroundColor: "#F1F1F1",

    borderRadius: 15,

    paddingVertical: 20,
    paddingHorizontal: 12,

    elevation: 4
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
    fontSize: 17,
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

    width: "70%",
    height: 60,

    borderRadius: 20,
  },

  complaintText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold"
  },

  checkBoxContainer: {
    width: 22,
    height: 22,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 15,

    backgroundColor: "#FFF",

    marginRight: 10,
  },

  checkBox: {
    width: 10,
    height: 10,
    
    borderRadius: 15
  }
})