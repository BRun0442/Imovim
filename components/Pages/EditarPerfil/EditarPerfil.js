import React from "react";
import { View, Text, StatusBar } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Header from "../../Header/Header";
import { styles } from './style.js'
import { Entypo } from '@expo/vector-icons';

function EditarPerfil() {
    return (
        <ScrollView style={styles.container}>
            <Header />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Editar Perfil</Text>
                <Entypo name="save" size={35} color="#F8670E" />
            </View>

            <View style={styles.editProfileContainer}>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Foto do Perfil</Text>
                </View>

                <View style={styles.editProfileIconContainerPhoto}>
                    <View style={styles.editPhoto}>
                        <Entypo name="camera" size={22} color="#ADADAD" />
                    </View>
                </View>

                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Foto de Capa</Text>
                </View>

                <View style={styles.editProfileIconContainerBanner}>
                    <View style={styles.editBanner}>
                        <Entypo name="camera" size={22} color="#ADADAD" />
                    </View>
                </View>

                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Cidade</Text>
                </View>

                <View style={styles.editProfileIconContainerInput}>
                    <TextInput style={styles.input} />
                </View>

            </View>
            <StatusBar />
        </ScrollView>
    )
}

export default EditarPerfil;