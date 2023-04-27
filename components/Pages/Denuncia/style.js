import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 15
  },

  content: {
    width: "100%",
    height: "80%",

    display: "flex",
    alignItems: "center",

    backgroundColor: "#D9D9D9",

    paddingHorizontal: 15,

    borderRadius: 20
  },

  modal: {
    display: "flex",

    backgroundColor: "#F1F1F1",

    width: "100%",
    height: "85%",

    borderRadius: 20,
  },

  headerModal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    width: "100%",
    height: "10%",
  },

  headerModalText: {
    color: "#000",
    fontSize: 21,
    fontWeight: "600",
  },

  optionsComplaint: {
    height: "80%",

    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",

    marginBottom: 15,
    marginTop: 25
  },

  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
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

    marginTop: 50
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