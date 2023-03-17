import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { styles } from './style'

import { ScrollView } from 'react-native-gesture-handler';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAnotherUserData } from '../../../services/user';
import Header from '../../Header/Header.js'
import { AuthContext } from '../../../contexts/auth';

export default function PerfilVisãoExterna({ navigation }, props) {

    const [changeIcon, setChangeIcon] = useState(false)

    const { anotherUser_id } = useContext(AuthContext)
    const [profileImage, setProfileImage] = useState()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('s')
    
    const getUserData = async () => {
        const data = await getAnotherUserData(anotherUser_id)
        console.log(data)
        console.log(data.profileInfo[0].profileImage)
        setProfileImage(data.profileInfo[0].profileImage)
        setLocation(data.profileInfo[0].localization)
        setName(data.profileInfo[0].nickname)
        return data
    } 

    useEffect(() => {
        getUserData()
    }, [anotherUser_id])

    return (
        <ScrollView style={styles.container}>
            <Header navigation={navigation} />

            <View style={styles.background} />

            <View style={styles.perfil}>

                <View style={styles.iconsContainer}>
                    {!profileImage && <View style={styles.iconCam}>
                        <Entypo name="camera" size={22} color="white" />
                    </View>}

                    {profileImage && <Image style={styles.profileImage} source={{uri: profileImage}} />}

                    <View style={styles.addFriendContainer}>
                        <View>
                            <TouchableOpacity
                                style={styles.followButton}
                                onPress={() => setChangeIcon(!changeIcon)}
                            >
                                {
                                    changeIcon ?
                                        <View style={styles.addFriendsIcons}>
                                            <FontAwesome5 name="user-check" size={24} color="#FFF" />
                                            <Text style={styles.addFriendText}>Seguindo</Text>
                                        </View>
                                        :
                                        <View style={styles.addFriendsIcons} >
                                            <Ionicons name="person-add" size={24} color="#FFF" />
                                            <Text style={styles.addFriendText}>Seguir</Text>
                                        </View>

                                }
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
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.location}>{location}</Text>
                    </View>

                </View>
            </View>
            <View style={styles.border}></View>

        </ScrollView>
    );
}