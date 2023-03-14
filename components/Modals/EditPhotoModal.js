import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function EditPhotoModal({ handleClose }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={handleClose} ></TouchableOpacity>

            <View style={styles.content}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                        <Foundation name="pencil" size={24} color="#FFF" />
                        <Text style={styles.textButton}>Editar legenda</Text>
                    </TouchableOpacity>

                    <View style={styles.line}></View>

                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="trash-bin" size={24} color="#FFF" />
                        <Text style={styles.textButton}>Excluir foto</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    content: {
        width: "100%",
        height: "50%",

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
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

    textButton:{
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