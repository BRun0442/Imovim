import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

    titleContainer: {
        marginTop: 25,
        marginBottom: 20,

        paddingHorizontal: 15
    },

    title: {
        fontSize: 22,
        fontWeight: "600"
    },

    photoContainer: {
        width: "100%",

        paddingHorizontal: 8,
        paddingVertical: 15,
        

        backgroundColor: "#F1F1F1",
        borderRadius: 20,

        
    },

    photos: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row", 

        flexWrap: "wrap",
    }
})

