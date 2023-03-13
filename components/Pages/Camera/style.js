import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    
    fixedRatio: {
        width: "100%",
        height: "100%",
        aspectRatio: 1,
    },

    buttonContainer: {
        width: "100%",
        height: "10%",

        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",

        position: "absolute",
        bottom: 50,
    },

    text: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
    }
}); 