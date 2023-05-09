import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    backgroundColor: "#FFF"
  },

  titleContainer: {
    width: "100%",
    height: "5%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 10,

    marginVertical: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "600"
  },

  containerScroll: {
    width: "100%",
    height: "80%",

    paddingHorizontal: 8
  },

  scroll: {
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 5,
    paddingVertical: 5,



    borderRadius: 25
  }

})