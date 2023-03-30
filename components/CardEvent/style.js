import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    eventCard: {
        display: "flex",
        flexDirection: "column",

        marginTop: 20,
        marginRight: 10,

        backgroundColor: "#F6F6F6",

        borderRadius: 8
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 10,

        width: 350,
        height: 40
    },

    title: {
        marginLeft: 5,
        fontWeight: "bold",
        fontSize: 15
    },

    image: {
        height: 160,
    },

    describeContainer: {
        paddingHorizontal: 5,

        height: 60,
        minHeight: 50,
    },

    describe: {
        marginLeft: 5,
        fontSize: 14
    }
})