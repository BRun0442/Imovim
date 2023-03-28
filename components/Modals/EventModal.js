import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function EventModal({ handleClose, deletePost }, props) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.closedButton} onPress={handleClose} ></TouchableOpacity>

            <View style={styles.content}>
                <View style={styles.modal}>

                    <View style={styles.headerModal}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome5 name="calendar-plus" size={25} color="#F8670E" />
                            {/* <Text style={styles.textButton}>{props.nameEvent}</Text> */}
                            <Text style={styles.headerModalText}>Nome evento</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.eventImage}>
                        {/* <Image /> renderizar a imagem do evento */}
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.closedButton} onPress={handleClose} ></TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        width: "100%",
        height: "40%",

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        backgroundColor: "#000",
    },

    closedButton: {
        height: "30%",
        zIndex: 9,
        backgroundColor: "red"
    },

    modal: {
        display: "flex",
        justifyContent: "space-around",

        backgroundColor: "#FF7926",

        width: "80%",
        height: "90%",

        borderRadius: 20,
    },

    headerModal:{
        display: "flex",
        justifyContent: "center",

        backgroundColor: "#FFF",
        width: "100%",

        borderRadius: 20,
    },

    headerModalText:{
        color: "#000",
        fontSize: 20,
        fontWeight: "600",

        marginLeft: 15
    },

    eventImage:{
        width: "80%",
        height: "50%",

        backgroundColor: "#747474"
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
})