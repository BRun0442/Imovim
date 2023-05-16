import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function EditPhotoModal({ handleClose, deletePost }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose}></TouchableOpacity>

            <View style={styles.modal}>
                <TouchableOpacity style={styles.closedButtonLeft} onPress={handleClose}></TouchableOpacity>

                <View style={styles.content}>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button}>
                            <Foundation name="pencil" size={27} color="#FFF" />
                            <Text style={styles.textButton}>Editar legenda</Text>
                        </TouchableOpacity>

                        <View style={styles.line} />

                        <TouchableOpacity onPress={() => deletePost()} style={styles.button}>
                            <MaterialIcons name="delete" size={30} color="#FFF" />
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
        height: "65%",
        zIndex: 9,
    },

    closedButtonBottom: {
        height: "25%",
        zIndex: 9,
    },
    
    closedButtonLeft: {
        width: "25%",
        height: "100%",
    },

    closedButtonRight: {
        width: "25%",
        height: "100%",
    },

    content: {
        width: "50%",
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

        width: "100%",
        height: 100,

        borderRadius: 20,
    },

    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 12,
    },

    textButton: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600",

        marginLeft: 15
    },

    line: {
        backgroundColor: "#983A00",
        width: "100%",
        height: 2,

        marginVertical: 6
    }

})