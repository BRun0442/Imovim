import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: 110,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 15,

    backgroundColor: "#D9D9D9",

    borderRadius: 20,

    marginTop: 5,
    marginBottom: 10
  },

  userInfo:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  name:{
    marginLeft: 10
  }
})