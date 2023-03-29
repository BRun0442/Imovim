import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function EventModal({ handleClose }, props) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose} ></TouchableOpacity>

            <View style={styles.content}>

                <View style={styles.modal}>

                    <View style={styles.headerModal}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome5 name="calendar-plus" size={25} color="#F8670E" />
                            <Text style={styles.headerModalText}>{props.eventName}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: 6 }}>

                        <View style={styles.eventImage}>
                            <Image style={styles.image} />
                        </View>

                        <View style={styles.modalInfo}>

                            <View style={styles.dateEvent}>
                                <Text style={styles.dateTitle}>Data: </Text>
                                <Text style={styles.date}>{props.eventDate}</Text>
                            </View>

                            <View style={styles.hourEvent}>
                                <Text style={styles.hourTitle}>Horário: </Text>
                                <Text style={styles.hour}>{props.eventHour}</Text>
                            </View>

                            <View style={styles.locationEvent}>
                                <Text style={styles.locationTitle}>Local: </Text>
                                <Text style={styles.location}>{props.eventLocation}</Text>
                            </View>

                        </View>

                        <View style={styles.interactiveButtonContainer}>
                            <TouchableOpacity style={styles.interactiveButton}>
                                <AntDesign name="like1" size={60} color="#FFF" />
                                <Text style={styles.interactiveText}>Eu vou!</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.interactiveButton}>
                                <Ionicons name="add-circle-outline" size={70} color="#FFF" />
                                <Text style={styles.interactiveText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.closedButtonBottom} onPress={handleClose}></TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        width: "100%",
        height: "70%",

        display: "flex",
        alignItems: "center",

        // backgroundColor: "#000",

        paddingHorizontal: 15
    },

    closedButtonTop: {
        height: "20%",
        zIndex: 9,
    },

    closedButtonBottom:{
        height: "10%",
        zIndex: 9,
    },

    modal: {
        display: "flex",

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

    eventImage: {
        width: "100%",
        height: "40%",

        marginBottom: 15
    },

    image:{
        borderRadius: 15
    },

    dateEvent: {
        display: "flex",
        flexDirection: "row",

        marginBottom: 5
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

        marginBottom: 5
    },

    hourTitle: {
        marginLeft: 15,
        color: "#CB5106",
        fontSize: 20
    },

    hour: {
        fontSize: 20
    },

    locationEvent: {
        display: "flex",
        flexDirection: "row",

        marginBottom: 5
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

        marginTop: 15
    },

    interactiveButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#F8670E",

        width: "40%",
        height: "60%",

        borderRadius: 20
    },

    interactiveText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
    },

    button: {
        display: "flex",
        flexDirection: "row",

        paddingHorizontal: 12,
        marginVertical: 2
    }
})