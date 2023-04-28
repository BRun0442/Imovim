import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    backgroundColor: "#FFF"
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    height: "10%",

    paddingHorizontal: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "600"
  },

  content: {
    width: "100%",
    height: "80%",

    paddingHorizontal: 20,
  },

  optionsComplaint: {
    height: "100%",
    backgroundColor: "#F1F1F1",

    borderRadius: 20,
    paddingVertical: 25,
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

    height: "15%",

    marginTop: 25
  },

  complaintButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#DB3232",

    width: "80%",
    height: "80%",

    borderRadius: 30,
  },

  complaintText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
})