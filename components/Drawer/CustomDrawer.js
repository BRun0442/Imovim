import React, {useContext} from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth.js';

export default function CustomDrawer({ navigation }, props) {
    const { setLogin } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.section01}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Menu</Text>
                </View>

                <View style={styles.dataContainer}>
                    <Image style={styles.dataContainerImage} source={{
                        uri: "https://randomuser.me/api/portraits/thumb/men/57.jpg"
                    }}
                    />
                    <Text style={styles.dataContainerText}>Nome Sobrenome</Text>
                </View>

                <View style={styles.containerItems}>
                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Página Inicial') }}
                    >
                        <Entypo name="home" size={30} color="#FFF" />
                        <Text style={styles.itemText}>Página Inicial</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Perfil') }}
                    >
                        <FontAwesome5 name="user-alt" size={30} color="#FFF" />
                        <Text style={styles.itemText}>Meu Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Eventos') }}
                    >
                        <FontAwesome5 name="calendar-plus" size={30} color="#FFF" />
                        <Text style={styles.itemText}>Eventos</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={() => setLogin(false)}>
                <View style={styles.exitContainer}>
                    <View style={styles.exit}>
                        <Ionicons name="exit-outline" size={24} color="#FFF" />
                        <Text style={styles.exitText}>SAIR</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF7926",
    },

    titleContainer: {
        paddingTop: 20,
        paddingLeft: 20
    },

    title: {
        color: "#FFF",
        fontSize: 30,
        fontWeight: "600"
    },

    dataContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    dataContainerImage: {
        width: 120,
        height: 120,
        borderRadius: 100
    },

    dataContainerText: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "400",

        marginTop: 10,
        marginBottom: 20
    },

    containerItems: {
        paddingHorizontal: 15
    },

    items: {
        width: 250,
        height: 50,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

        paddingHorizontal: 25,

        marginBottom: 15,

        backgroundColor: "#CB5106",

        borderRadius: 30
    },

    itemText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "500",

        marginLeft: 15
    },

    exitContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    exit: {
        width: 200,
        height: 60,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#8B04A2",

        borderRadius: 40
    },

    exitText: {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "500",

        marginLeft: 10
    }

})