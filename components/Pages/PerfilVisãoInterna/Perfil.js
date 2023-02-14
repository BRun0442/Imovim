import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './style'
import TopBar from '../../TopBar/TopBar';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../Header/Header'
import Post from '../../Post/Post';
import Line from '../../Line/Line'
import { FontAwesome5 } from '@expo/vector-icons';
{/* <FontAwesome5 name="user-check" size={24} color="black" /> */ }
// icone para quando a pessoa clicar em adicionar não sei por sapoha Ainda...

export default function PerfilVisãoInterna(props) {
    return (
        <ScrollView style={styles.container}>
            <Header />

            <View style={styles.background} />

            <View style={styles.perfil}>

                <View style={styles.icons}>
                    <View style={styles.iconCam}>
                        <Entypo name="camera" size={22} color="white" />
                    </View>
                    <View style={styles.iconPencil}>
                        <Foundation name="pencil" size={25} color="black" />
                    </View>
                </View>

                <View style={styles.infos}>
                    <View style={styles.data}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.location}>{props.location}</Text>

                    </View>
                    <View style={styles.seeMore}>
                        <TouchableOpacity style={styles.buttonSeeMore}>
                            <Ionicons name="person-add" size={20} color="white" />
                            <Text style={styles.textButtonSeeMore}>Ver Amigos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.border}></View>

            <View style={styles.tagsView}>
                <Text style={styles.tags}>#Adicione seus esportes favoritos</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>...</Text>
                </TouchableOpacity>

            </View>

            <Line />

            <View style={styles.posts}>
                <Text style={styles.alert}>Não há nenhuma publicação aqui</Text>
            </View>
            <StatusBar />
        </ScrollView>
    );
}