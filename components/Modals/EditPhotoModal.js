import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function EditPhotoModal({ handleClose, deletePost }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose}></TouchableOpacity>

            <View style={styles.modal}>
                <TouchableOpacity style={styles.closedButtonLeft} onPress={handleClose}></TouchableOpacity>

                <View style={styles.content}>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button}>
                            <Foundation name="pencil" size={24} color="#FFF" />
                            <Text style={styles.textButton}>Editar legenda</Text>
                        </TouchableOpacity>

                        <View style={styles.line}></View>

                        <TouchableOpacity onPress={() => deletePost()} style={styles.button}>
                            <Ionicons name="trash-bin" size={24} color="#FFF" />
                            <Text style={styles.textButton}>Excluir foto</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.closedButtonRight} onPress={handleClose}></TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.closedButtonBottom} onPress={handleClose} ></TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    modal: {
        width: "100%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    closedButtonTop: {
        height: "80%",
        zIndex: 9,
    },

    closedButtonBottom: {
        height: "10%",
        zIndex: 9,
    },

    closedButtonLeft: {
        width: "27.5%",
        height: "100%",
    },

    closedButtonRight: {
        width: "27.5%",
        height: "100%",
    },


    content: {
        width: "45%",
        height: "10%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#D9D9D9"
    },

    buttons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        backgroundColor: "#FF7926",

        width: 200,
        height: 100,

        borderRadius: 20,
    },

    button: {
        display: "flex",
        flexDirection: "row",

        paddingHorizontal: 12,
        marginVertical: 2
    },

    textButton: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600",

        paddingLeft: 10
    },

    line: {
        backgroundColor: "#983A00",
        width: "100%",
        height: 2,

        marginVertical: 5
    }

})