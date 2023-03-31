import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  infoMemberContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 5,

    backgroundColor: "#F1F1F1"
  },

  infoMember: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  membersName: {
    fontSize: 18
  },

  icons: {
    display: "flex",
    flexDirection: "row",
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
})