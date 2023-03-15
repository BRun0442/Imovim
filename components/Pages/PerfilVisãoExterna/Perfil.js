import React, { useState } from 'react';
import { View, Text, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { styles } from './style'

import { ScrollView } from 'react-native-gesture-handler';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../../Header/Header.js'

export default function PerfilVisãoExterna(props) {

    // const [changeIcon, setChangeIcon] = useState(false)

    // console.log(changeIcon);

    // if (changeIcon === true) {
    //     <View>
    //         <FontAwesome5 name="user-check" size={24} color="black" />
    //         <Text style={styles.addFriendText}>Adicionado</Text>
    //     </View>
    // } else {
    //     <View>
    //         <Ionicons name="person-add" size={24} color="#FFF" />
    //         <Text style={styles.addFriendText}>Adicionar</Text>
    //     </View>
    // }

    return (
        <ScrollView style={styles.container}>
            <Header />

            <View style={styles.background} />

            <View style={styles.perfil}>

                <View style={styles.iconsContainer}>
                    <View style={styles.iconCam}>
                        <Entypo name="camera" size={22} color="white" />
                    </View>

                    <View style={styles.addFriendContainer}>
                        <View>
                            <TouchableOpacity
                                style={styles.addFriendButton}
                                onPress={() => setChangeIcon(!changeIcon)}
                            >
                                <Ionicons name="person-add" size={24} color="#FFF" />
                                <Text style={styles.addFriendText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.iconsActions}>
                            <Ionicons name="alert-circle" size={28} color="#F8670E" />
                            <Entypo name="block" size={24} color="#F8670E" style={{ marginLeft: 8, marginRight: 8 }} />
                            <Ionicons name="chatbubble" size={25} color="#F8670E" />
                        </View>
                    </View>
                </View>

                <View style={styles.infos}>

                    <View style={styles.data}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.location}>{props.location}</Text>
                    </View>

                </View>
            </View>
            <View style={styles.border}></View>

        </ScrollView>
    );
}