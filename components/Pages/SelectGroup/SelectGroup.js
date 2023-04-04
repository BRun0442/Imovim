import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './style.js'
import Header from '../../Header/Header'
import { Entypo } from '@expo/vector-icons';
import ResultSearch from '../../ResultSearch/ResultSearch';
import { MaterialIcons } from '@expo/vector-icons';
import { getAllUsers } from '../../../services/user.js';
import { AuthContext } from '../../../contexts/auth.js';

export default function SelectGroup({ navigation }) {
    const { id } = useContext(AuthContext)
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
            return slicedName.toLowerCase() == input.toLowerCase() && user.user_id != id
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
        <SafeAreaView style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <View>
                    <Text style={styles.title}>Adicionar participantes:</Text>
                </View>

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate("Chat Grupo")}
                >
                    <MaterialIcons name="group-add" size={30} color="#F8670E" />
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchPeople}>
                <View style={styles.searchContainer}>

                    <View style={styles.icon}>
                        <Entypo name="magnifying-glass" size={25} color="#A512BD" />
                    </View>

                    <TextInput 
                        onChangeText={async (text) => {
                            setInputText(text)
                            await searchUser(text)
                        }}
                        style={styles.searchInput} 
                        placeholder='Pesquise pessoas...' 
                    />
                </View>

                <ScrollView style={{ marginBottom: 30 }}>
                    <View style={styles.results}>

                    {searchedUsers.map((user, index) => {
                        return (
                            <ResultSearch user_id={user.user_id} profileImage={user.profileImage} navigation={navigation} key={index} nickname={user.nickname}  />
                        )
                    })}
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}