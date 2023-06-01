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

        paddingHorizontal: 15,

        marginTop: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: "600"
    },

    createEventButton: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    createEventButtonText: {
        fontSize: 14,
        fontWeight: "500"
    },

    eventTagContainer:{
        width: "100%",

        display: "flex",
        alignItems: "center",

        paddingHorizontal: 10
    },

    eventTag: {
        width: "100%",
        height: 50,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#F1F1F1",

        borderRadius: 15,

        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginTop: 20,

        elevation: 5,
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
        paddingHorizontal: 5,
        paddingVertical: 20,

        backgroundColor: "#FFF"
    },

    header: {
        width: "100%",
        
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

        backgroundColor: "#FFF",

        borderTopEndRadius: 15,
        borderTopStartRadius: 15,

        paddingHorizontal: 15,
        padding: 10,

        marginBottom: 15
    },

    button: {
        display: "flex",
        flexDirection: "row",

        marginVertical: 4
    },

    headerText: {
        color: "#000",
        fontSize: 21,
        fontWeight: "600",

        marginLeft: 15
    },

    contentContainer: {
        paddingHorizontal: 4,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    authorEvent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 15
    },

    authorTitle: {
        fontSize: 16,

        marginLeft: 8
    },

    author: {
        fontSize: 16,
        fontWeight: "600",
    },

    eventImage: {
        width: "100%",
        height: 300,

        marginBottom: 15
    },

    image: {
        borderRadius: 15,
        height: "100%",
        width: "100%",

        resizeMode: "stretch"
    },

    contentInfo: {
        marginVertical: 15
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
        flexDirection: "column",

        marginVertical: 5,
    },

    locationTitle: {
        width: "100%",

        marginLeft: 15,
        color: "#CB5106",
        fontSize: 20
    },

    locationDataContainer: {
        width: "100%",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 15,
    },

    containerButtons: {
        width: "100%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        marginVertical: 5
    },

    buttonMap: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        marginHorizontal: 5,
        padding: 15,

        backgroundColor: "#F1F1F1",

        borderRadius: 10
    },

    buttonCopy: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        marginHorizontal: 5,
        padding: 15,

        backgroundColor: "#F1F1F1",

        borderRadius: 10
    },

    locationData: {
        width: "100%",

        marginVertical: 5
    },

    location: {
        color: "#000",
        fontSize: 20,
    },

    interactiveButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    interactiveButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        backgroundColor: "#F8670E",

        width: 120,
        height: 120,

        borderRadius: 15
    },

    interactiveText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },

    iconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
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
})
