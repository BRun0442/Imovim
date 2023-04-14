import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    flexDirection: "row",
    backgroundColor: "#F1F1F1",

    width: "100%",
    height: 150,

    paddingHorizontal: 15,
    paddingVertical: 20,

    marginBottom: 10,

    borderRadius: 30,
  },

  userInfo: {
    display: "flex",
    flexDirection: "row",

    width: "65%"
  },

  iconCam: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 80,
    height: 80,

    backgroundColor: "#d9d9d9",

    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 3
  },

  data: {
    display: "flex",
    flexDirection: "column",

    marginLeft: 10
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    width: "35%",
    height: "100%",
  },

  textButton: {
    color: "#FFF",
    fontSize: 18,

    fontWeight: "bold"
  },

  aceptButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 45,

    backgroundColor: "#A512BD",

    borderRadius: 15,

    marginVertical: 5
  },

  deleteButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 45,

    backgroundColor: "#D9D9D9",

    borderRadius: 15,

    marginVertical: 5
  }
})