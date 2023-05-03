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


    content: {
        width: "100%",
        height: 800,

        paddingHorizontal: 15,
    },

    closedButtonTop: {
        height: "15%",
        zIndex: 9,
    },

    closedButtonBottom: {
        height: "5%",
        zIndex: 9,
    },

    modal: {
        backgroundColor: "#F9F9F9",

        width: "100%",
        height: "100%",

        borderRadius: 20,
    },

    headerModal: {
        display: "flex",
        justifyContent: "center",

        backgroundColor: "#FFF",
        width: "100%",

        borderTopEndRadius: 15,
        borderTopStartRadius: 15,

        paddingHorizontal: 15,
        padding: 10,

        marginBottom: 15
    },

    headerModalText: {
        color: "#000",
        fontSize: 21,
        fontWeight: "600",

        marginLeft: 15
    },

    modalContainer: {
        paddingHorizontal: 4,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    eventImage: {
        width: "100%",
        height: "35%",

        marginBottom: 15
    },

    image: {
        borderRadius: 15,
        height: "100%",
        width: "100%",
    },

    dateEvent: {
        display: "flex",
        flexDirection: "row",

        marginVertical: 5
    },

    dateTitle: {
        marginLeft: 15,
        color: "#CB5106",
        fontSize: 20
    },

    date: {
        fontSize: 20
    },

    hourEvent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        marginVertical: 5
    },

    hourTitle: {
        marginLeft: 15,
        color: "#CB5106",
        fontSize: 20
    },

    hour: {
        fontSize: 20
    },

    descritpionEvent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',

        marginVertical: 5
    },

    descriptionTitle: {
        marginLeft: 15,
        color: "#CB5106",
        fontSize: 20
    },

    description: {
        fontSize: 20,
        paddingHorizontal: 15,
    },

    locationEvent: {
        display: "flex",
        flexDirection: "row",

        marginVertical: 5
    },

    locationTitle: {
        marginLeft: 15,
        color: "#CB5106",
        fontSize: 20
    },

    location: {
        fontSize: 20
    },

    interactiveButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

        width: "100%",
        height: "30%",
    },

    interactiveButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#F8670E",

        width: "35%",
        height: "70%",

        borderRadius: 20
    },

    interactiveText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
    },

    iGoContainer: {
        width: 30,
        height: 30,

        borderRadius: 100,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        top: 10,
        right: 10,

        backgroundColor: "#D9D9D9"
    },

    iGo: {
        color: "#000",
        fontSize: 18,
        fontWeight: "600"
    },

    button: {
        display: "flex",
        flexDirection: "row",

        paddingHorizontal: 12,
        marginVertical: 2
    }
})
