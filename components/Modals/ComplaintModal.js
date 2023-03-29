import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function ComplaintModal({ handleClose }, props) {
    return (
        <SafeAreaView style={styles.container}>
            {/* <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose} ></TouchableOpacity> */}

            <View style={styles.content}>

                <View style={styles.headerModal}>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.headerModalText}>Denunciar</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={handleClose}>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.modal}>
                    <View style={styles.optionsComplaint}>

                        <Text style={styles.title}>Denuncie publicações que contenham:</Text>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Nudez explícita</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Ofensas e ameaças</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Discurso de ódio</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Bullying ou assédio</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Automutilação</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Violação da propriedade intelectual</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Venda de produtos ilícitos</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Golpe ou fraude</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Informação falsa</Text>
                        </View>

                        <View style={styles.info}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={styles.infoText}>Spam</Text>
                        </View>

                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.complaintButton}>
                                <Text style={styles.complaintText}>Denunciar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.closedButtonBottom} onPress={handleClose}></TouchableOpacity> */}
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: 15
    },

    content: {
        width: "100%",
        height: "80%",

        display: "flex",
        alignItems: "center",

        backgroundColor: "#D9D9D9",

        paddingHorizontal: 15,

        borderRadius: 20
    },

    modal: {
        display: "flex",

        backgroundColor: "#F1F1F1",

        width: "100%",
        height: "85%",

        borderRadius: 20,
    },

    headerModal: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

        width: "100%",
        height: "10%",
    },

    headerModalText: {
        color: "#000",
        fontSize: 21,
        fontWeight: "600",
    },

    optionsComplaint: {
        height: "80%",

        paddingHorizontal: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",

        marginBottom: 15,
        marginTop: 25
    },

    info: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    infoText: {
        fontSize: 18,
        marginVertical: 8
    },

    buttonView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "15%",

        marginTop: 50
    },

    complaintButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#DB3232",

        width: "80%",
        height: "80%",

        borderRadius: 30,
    },

    complaintText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
    },
})