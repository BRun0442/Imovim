import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, SafeAreaView} from 'react-native'
import { styles } from './style.js'
import Header from "../../Header/Header.js";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import api from "../../../services/api.js";
import ResultSearchFriends from "../../ResultSearchFriends/ResultSearchFriends.js";
import { AuthContext } from "../../../contexts/auth.js";

export default function VerAmigos({ navigation }) {
    const [friends, setFriends] = useState()
    const [loaded, setLoaded] = useState(false)
    const { id } = useContext(AuthContext)

    const getFriends = async () => {
        await api.get(`/user/get-followers-list/${id}`)
        .then((res) => {
            console.log(res)
            setFriends(res.data)
            setLoaded(true)
        })
    }

    useEffect(() => {
        getFriends()
    }, [])

    if(!loaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Amigos</Text>
            </View>

            <View style={styles.searchContainer}>
                <View>
                    <TextInput style={styles.searchInput} placeholder='Pesquisar amigos'>
                        <MaterialIcons name="person-search" size={30} color="#FF7926" />
                    </TextInput>
                </View>

                <ScrollView style={styles.results}>
                    {friends.map((friend, index) => {
                        return (
                            <ResultSearchFriends key={index} profileImage={friend.profileImage} name={friend.nickname} />
                        )
                    })}
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}