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
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
{/* <FontAwesome5 name="user-check" size={24} color="black" /> */ }
// icone para quando a pessoa clicar em adicionar não sei por sapoha Ainda...

export default function PerfilVisãoInterna({ navigation }, props) {
    return (
        <ScrollView style={styles.container}>
            <Header />

            <View style={styles.background} />

            <View style={styles.perfil}>

                <View style={styles.icons}>
                    <View style={styles.iconCam}>
                        <Entypo name="camera" size={22} color="#FFF" />
                    </View>
                    <TouchableOpacity style={styles.iconPencil}
                        onPress={() => { navigation.navigate('Editar Perfil') }}
                    >
                        <Foundation name="pencil" size={25} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.infos}>
                    <View style={styles.data}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.location}>{props.location}</Text>

                    </View>
                    <View style={styles.seeMore}>
                        <TouchableOpacity style={styles.buttonSeeMore}>
                            <Ionicons name="person-add" size={20} color="#FFF" />
                            <Text style={styles.textButtonSeeMore}>Ver Amigos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.border}></View>

            <View style={styles.tagsView}>
                <View style={styles.tags}>
                    <Text style={styles.tagsText}>#Adicione seus esportes favoritos</Text>
                </View>

                <View style={styles.editProfileContainer}>

                    <View style={styles.editProfile}>

                        <TouchableOpacity
                            style={styles.editProfileButton}
                            onPress={() => { navigation.navigate('Tela Tags') }}
                        >
                            <Foundation name="pencil" size={24} color="#FFF" />
                            <Text style={styles.editProfileText}>Editar Tags</Text>
                        </TouchableOpacity>

                        <View style={styles.whiteLine}></View>

                        <TouchableOpacity
                            style={styles.editProfileButton}
                            onPress={() => { navigation.navigate('Tela Ver Mais') }}
                        >

                            <AntDesign name="eye" size={24} color="#FFF" />
                            <Text style={styles.editProfileText}>Ver Mais</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="ios-close" size={24} color="#FFF" />
                    </View>

                    {/* <Text style={styles.buttonText}>...</Text> */}
                </View>

            </View>

            <View style={styles.line}></View>

            <View style={styles.posts}>
                <Text style={styles.alert}>Não há nenhuma publicação aqui</Text>
            </View>



            <StatusBar />
        </ScrollView>
    );
}