import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingStart: 10,
        paddingEnd: 10,

        marginTop: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: "600"
    },

    eventTag: {
        width: "95%",
        height: 50,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#F1F1F1",

        borderRadius: 15,

        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginTop: 20
    },

    eventText: {
        fontSize: 14,
        fontWeight: "500"
    },

    containerEventsPopular: {
        paddingLeft: 8,
    },

    containerEventsNearYou: {
        paddingLeft: 8,
        marginBottom: 30
    },
})
