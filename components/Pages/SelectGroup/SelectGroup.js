import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './style.js'
import Header from '../../Header/Header'
import { Entypo } from '@expo/vector-icons';
import ResultSearch from '../../ResultSearch/ResultSearch';
import { MaterialIcons } from '@expo/vector-icons';
import { getAllUsers } from '../../../services/user.js';
import { AuthContext } from '../../../contexts/auth.js';
import UserSelected from '../../UserSelected/UserSelected.js';

export default function SelectGroup({ navigation }) {
    const { id } = useContext(AuthContext)
    const [users, setUsers] = useState(null)
    const [inputText, setInputText] = useState('')
    const [searchedUsers, setSearchUsers] = useState([])

    const getUsers = async () => {
        let data = await getAllUsers()
        data = data.map((user) => {
            return {
                ...user,
                selected: false
            }
        })
        setUsers(data)
        console.log(data)
        return data
    }

    const searchUser = async (input) => {
        let data = users.filter((user) => {
            const slicedName = user.nickname.slice(0, input.length)
            console.log(slicedName, input)
            return slicedName.toLowerCase() == input.toLowerCase() && user.user_id != id
        })
        console.log(data.length)
        console.log(data)
        setSearchUsers(data)
        return data
    }

    const handleSelect = async (user_id) => {
        let data = searchedUsers.map((user) => {
            if (user_id == user.user_id) {
                return {
                    ...user,
                    selected: !user.selected
                }
            } else {
                return {
                    ...user,
                }
            }
        })
        let usersData = users.map((user) => {
            if (user_id == user.user_id) {
                return {
                    ...user,
                    selected: !user.selected
                }
            } else {
                return {
                    ...user,
                }
            }
        })
        setSearchUsers(data)
        setUsers(usersData)
        console.log(data);
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

            <View style={{paddingHorizontal: 10}}>
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

                    <ScrollView style={{ height: "80%", marginBottom: 15 }}>
                        <View style={styles.results}>

                            {searchedUsers.map((user, index) => {
                                return (
                                    <UserSelected user_id={user.user_id} handleSelect={handleSelect} selected={user.selected} profileImage={user.profileImage} navigation={navigation} key={index} nickname={user.nickname} />
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}