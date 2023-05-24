import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

export default function DeleteMessage({ handleClose }) {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose} />

            <View style={styles.modal}>

                <Text style={styles.modalTitle}>Deseja apagar a mensagem?</Text>

                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.deleteText}>Apagar mensagem</Text>
                    <MaterialIcons name="delete" size={24} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleClose}
                >
                    <Text style={styles.deleteText}>Cancelar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.closedButtonBottom} onPress={handleClose} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: 15
    },

    closedButtonTop: {
        width: "100%",
        height: "36%"
    },

    modal: {
        width: "100%",
        height: 200,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        backgroundColor: "#F8670E",
        borderRadius: 20,

        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    modalTitle: {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "bold",

        marginBottom: 15
    },

    closedButtonBottom: {
        width: "100%",
        height: "39%"
    },

    deleteButton: {
        width: "80%",
        height: 50,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",

        backgroundColor: "#CB5106",

        borderRadius: 15,

        marginBottom: 10
    },

    deleteText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    }
})