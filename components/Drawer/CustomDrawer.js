import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style'

import api from "../../services/api";

import Loading from "../Loading/Loading";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '../../contexts/auth.js';
import { AccountDataContext } from '../../contexts/accountData.js';


export default function CustomDrawer({ navigation }, props) {
    const { setLogin, id, setProfilePicture, setUsername, profileUpdated } = useContext(AuthContext);
    const { accountData, setAccountData } = useContext(AccountDataContext);
    const [loaded, setLoaded] = useState(false)
    const [profileImage, setProfileImage] = useState(null)
    const [nickname, setNickname] = useState(null)

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    const handleLogout = async () => {
        setLogin(false)
        await save('isUserLoggedIn', 'notLoggedIn');
        await save('user_id', 'null')
        await save('user_data', 'null')
    }

    useEffect(() => {
        const handleUserData = async () => {
            await api.get(`/profile/get-profile-img/${id}`)
                .then(async (result) => {
                    setProfileImage(result.data.profileImage)
                    setNickname(result.data.nickname)
                    setUsername(result.data.nickname)
                    setProfilePicture(result.data.profileImage)
                    setLoaded(true)
                })
        }
        handleUserData()
    }, [profileUpdated])

    if (!loaded) {
        return (
            <Loading
                height={"100%"}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Menu</Text>
                </View>

                <View style={styles.dataContainer}>
                    <Image style={styles.dataContainerImage} source={{
                        uri: profileImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }}
                    />
                    <Text style={styles.dataContainerText}>{nickname}</Text>
                </View>

                <View style={styles.containerItems}>
                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Página Inicial') }}
                    >
                        <Entypo name="home" size={22} color="#FFF" />
                        <Text style={styles.itemText}>Página Inicial</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => {
                            navigation.navigate('Meu Perfil', { accountData: accountData })
                        }
                        }
                    >
                        <FontAwesome5 name="user-alt" size={22} color="#FFF" />
                        <Text style={styles.itemText}>Meu Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Eventos') }}
                    >
                        <FontAwesome5 name="calendar-plus" size={22} color="#FFF" />
                        <Text style={styles.itemText}>Eventos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Notificações') }}
                    >
                        <MaterialCommunityIcons name="bell-badge" size={24} color="#FFF" />
                        <Text style={styles.itemText}>Notificações</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Criar Post') }}
                    >
                        <MaterialIcons name="edit" size={24} color="#FFF" />
                        <Text style={styles.itemText}>Criar Post</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.items}
                        onPress={() => { navigation.navigate('Configurações') }}
                    >
                        <MaterialIcons name="settings" size={24} color="#FFF" />
                        <Text style={styles.itemText}>Configurações</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={() => handleLogout()}>
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