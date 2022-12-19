import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style'
import TopBar from '../../TopBar/TopBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../Header/Header'
import Post from '../../Post/Post';
import { FontAwesome5 } from '@expo/vector-icons';
{/* <FontAwesome5 name="user-check" size={24} color="black" /> */ }
// icone para quando a pessoa clicar em adicionar não sei por sapoha Ainda...

export default function PerfilVisãoExterna() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.background} />

            <View style={styles.perfil}>

                <View style={styles.icons}>
                    <View style={styles.iconCam}>
                        <Entypo name="camera" size={24} color="white" />
                    </View>
                    <View style={styles.iconPencil}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </View>
                </View>

                <View style={styles.infos}>
                    <View style={styles.data}>
                        <Text style={styles.name}>Nome Sobrenome</Text>
                        <Text style={styles.location}>São Paulo - SP</Text>

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
                <Text style={styles.tags}>#Futebol</Text>
                <Text style={styles.tags}>#Basquete</Text>
                <Text style={styles.tags}>#Volei</Text>
            </View>

            <Post
                profileImage="https://randomuser.me/api/portraits/men/89.jpg"
                postImage="https://www.odemocrata.com.br/esporte/wp-content/uploads/sites/6/2020/01/Screenshot_20200121-105821_Gallery-606x1024.jpg"
                profileName="Condoriano Feijó"
                postDate="hh/dd. quinta 19 de dez"
                postDescription="Pedal de hoje mais cedo!!!"

                likeQuantity="47"
                comentQuantity="10"
                shareQuantity="2"
            />

        </View>
    );
}