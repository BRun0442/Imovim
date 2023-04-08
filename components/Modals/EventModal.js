import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function EventModal({ handleClose, name, image, date, hour, location }, props) {

    const [actionIcon, setActionIcon] = useState(false)
    const [iGo, setIgo] = useState(0)

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose} ></TouchableOpacity>

            <View style={styles.content}>

                <View style={styles.modal}>

                    <View style={styles.headerModal}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome5 name="calendar-plus" size={25} color="#F8670E" />
                            <Text style={styles.headerModalText}>{name}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.modalContainer}>

                        <View style={styles.eventImage}>
                            <Image style={styles.image} source={{ uri: image }} />
                        </View>

                        <View style={styles.modalInfo}>

                            <View style={styles.dateEvent}>
                                <Text style={styles.dateTitle}>Data: </Text>
                                <Text style={styles.date}>{date}</Text>
                            </View>

                            <View style={styles.hourEvent}>
                                <Text style={styles.hourTitle}>Horário: </Text>
                                <Text style={styles.hour}>{hour}</Text>
                            </View>

                            <View style={styles.descritpionEvent}>
                                <Text style={styles.descriptionTitle}>Descrição do Evento: </Text>
                                <Text style={styles.description}></Text>
                            </View>

                            <View style={styles.locationEvent}>
                                <Text style={styles.locationTitle}>Local: </Text>
                                <Text style={styles.location}>{location}</Text>
                            </View>

                        </View>

                        <View style={styles.interactiveButtonContainer}>

                            <TouchableOpacity onPress={()=> setIgo(iGo + 1) } style={styles.interactiveButton}>

                                <AntDesign name="like1" size={60} color="#FFF" />
                                <Text style={styles.interactiveText}>Eu vou!</Text>

                                <View style={styles.iGoContainer}>
                                    <Text style={styles.iGo}>{iGo}</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setActionIcon(!actionIcon)} style={styles.interactiveButton}>
                                {
                                    actionIcon === true ?
                                        <Ionicons name="add-circle-outline" size={70} color="#FFF" />
                                        :
                                        <Feather name="check-circle" size={60} color="#FFF" />
                                }
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
        height: "80%",

        paddingHorizontal: 15,
    },

    closedButtonTop: {
        height: "15%",
        zIndex: 9,
    },

    closedButtonBottom: {
        height: "5%",
        zIndex: 9,
    },

    modal: {
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

    modalContainer: {
        paddingHorizontal: 4,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    eventImage: {
        width: "100%",
        height: "35%",

        marginBottom: 15
    },

    image: {
        borderRadius: 15,
        height: "100%",
        width: "100%",
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
        alignItems: "center",

        marginVertical: 5
    },

    descriptionTitle: {
        marginLeft: 15,
        color: "#CB5106",
        fontSize: 20
    },

    description: {
        fontSize: 20
    },

    locationEvent: {
        display: "flex",
        flexDirection: "row",

        marginVertical: 5
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
        alignItems: "center",

        width: "100%",
        height: "30%",
    },

    interactiveButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#F8670E",

        width: "35%",
        height: "70%",

        borderRadius: 20
    },

    interactiveText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
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

    button: {
        display: "flex",
        flexDirection: "row",

        paddingHorizontal: 12,
        marginVertical: 2
    }
})