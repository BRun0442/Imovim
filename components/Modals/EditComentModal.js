import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function EditComentModal(handleClose) {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose} />

            <View style={styles.modal}>
                <View style={styles.titleModal}>
                    <MaterialIcons name="edit" size={30} color="#FFF" />
                    <Text style={styles.title}>Editar Comentário</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Editar o comentário..."
                    />
                    <TouchableOpacity style={styles.inputIcon}>
                        <FontAwesome name="check" size={20} color="#FF7926" />
                    </TouchableOpacity>
                </View>

                <View style={styles.deleteContainer}>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Text style={styles.deleteTitle}>Apagar comentário</Text>
                        <MaterialIcons name="delete" size={30} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose} />
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

        paddingHorizontal: 15,
    },

    modal: {
        width: "100%",
        height: "22%",

        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        backgroundColor: "#F8670E",
        borderRadius: 20,

        paddingHorizontal: 15,
        paddingVertical: 10
    },

    titleModal: {
        width: "100%",
        height: "30%",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },

    title: {
        fontSize: 19,
        color: "#FFF",
        fontWeight: "500",

        marginLeft: 10
    },

    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        width: "100%",
        height: "40%",

    },

    input: {
        width: "85%",
        height: 40,

        borderColor: "#D9D9D9",
        borderBottomWidth: 2
    },

    inputIcon: {
        width: 40,
        height: 40,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 200,

        backgroundColor: "#FFF",

        marginLeft: 10
    },

    deleteContainer: {
        width: "100%",
        height: "30%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    
    deleteButton: {
        width: "60%",
        height: 50,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",

        backgroundColor: "#CB5106",

        borderRadius: 15
    },

    deleteTitle:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    }
})