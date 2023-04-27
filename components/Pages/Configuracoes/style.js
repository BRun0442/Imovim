import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
    },
    
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        width: "100%",
        height: "10%",

        paddingHorizontal: 10
    },

    title: {
        fontSize: 18
    },

    optionsContainer:{
        borderColor: "#D9D9D9",
        borderTopWidth: 3,
        borderBottomWidth: 3
    },

    optionsButton:{
        width: "100%",
        height: 60,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 15,
    },

    optionsText:{
        fontSize: 16,
        marginLeft: 15,
    }
})