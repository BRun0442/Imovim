import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    eventCard: {
        height: 260,

        display: "flex",
        flexDirection: "column",

        marginTop: 20,
        marginRight: 10,

        backgroundColor: "#F6F6F6",

        borderRadius: 8,
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 10,
        marginVertical: 5,

        width: 350,
        height: 40
    },

    title: {
        fontWeight: "bold",
        fontSize: 15,

        marginLeft: 15,
    },

    image: {
        height: 160,
    },

    describeContainer: {
        display: "flex",
        justifyContent: "center",
        
        paddingHorizontal: 5,

        height: 50,
    },

    describe: {
        marginLeft: 5,
        fontSize: 14
    }
})