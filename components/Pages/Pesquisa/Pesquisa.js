import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from './style.js'
import Header from '../../Header/Header'
import { Entypo } from '@expo/vector-icons';
import { getAllUsers } from '../../../services/user.js'

import ResultSearch from '../../ResultSearch/ResultSearch'

export default function Pesquisa({ navigation }) {
    const [users, setUsers] = useState(null)
    const [inputText, setInputText] = useState('')
    const [searchedUsers, setSearchUsers] = useState([])

    const getUsers = async () => {
        const data = await getAllUsers()
        setUsers(data)
        console.log(data)
        return data
    }

    const searchUser = async (input) => {
        const data = users.filter((user) => {
            const slicedName = user.nickname.slice(0, input.length)
            console.log(slicedName, input)
            return slicedName.toLowerCase() == input.toLowerCase()
        })
        console.log(data.length)
        console.log(data)
        setSearchUsers(data)
        return data
    }

    useEffect(() => {
        getUsers()
    }, [])

    if (!users) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.searchContainer}>
                <View style={styles.icon}>
                    <Entypo style={{ marginRight: 15 }} name="magnifying-glass" size={25} color="#FF7926" />
                </View>
                <TextInput onChangeText={async (text) => {
                    setInputText(text)
                    await searchUser(text)
                }} style={styles.searchInput} placeholder='Pesquise amigos, eventos etc.'>
                </TextInput>
            </View>

            <View style={styles.tags}>
                <Text style={styles.tag}>Pessoas</Text>
                <Text style={styles.tag}>Eventos</Text>
                <Text style={styles.tag}>Publicações</Text>
            </View>

            <ScrollView>
                <View style={styles.results}>
                    {searchedUsers.map((user, index) => {
                        return (
                            <ResultSearch user_id={user.user_id} profileImage={user.profileImage} navigation={navigation} key={index} nickname={user.nickname}  />
                        )
                    })}
                </View>
            </ScrollView>

        </View>
    )
}