import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, SafeAreaView, StatusBar } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { styles } from './style.js'

import Header from "../../Header/Header.js";
import ResultSearchFriends from "../../ResultSearchFriends/ResultSearchFriends.js";

import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../../../contexts/auth.js";

import api from "../../../services/api.js";

export default function VerAmigos({ navigation }) {
    const [friends, setFriends] = useState()
    const [loaded, setLoaded] = useState(false)
    const { id, setAnotherUser_id } = useContext(AuthContext)

    const getFriends = async () => {
        await api.get(`/friendShip/get-friends/${id}`)
            .then((res) => {
                console.log(res)
                setFriends(res.data)
                setLoaded(true)
            })
    }

    const goToProfile = (user_id) => {
        setAnotherUser_id(user_id)
        navigation.navigate('Outros Perfis')
    }

    useEffect(() => {
        getFriends()
    }, [])

    if (!loaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Amigos</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="person-search" size={32} color="#FF7926" />
                    </View>
                    <TextInput style={styles.searchInput} placeholder='Pesquisar amigos' />
                </View>

                <ScrollView style={styles.results}>
                    {friends.map((friend, index) => {
                        return (
                            <ResultSearchFriends key={index} user_id={friend.user_id} goToProfile={goToProfile} profileImage={friend.profileImage} name={friend.nickname} />
                        )
                    })}
                </ScrollView>
            </View>
            <StatusBar barStyle={'light-content'} />
        </View>
    )
}