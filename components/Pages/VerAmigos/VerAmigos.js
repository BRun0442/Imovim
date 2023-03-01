import React from "react";
import { View, Text, TextInput } from 'react-native'
import { styles } from './style.js'
import Header from "../../Header/Header.js";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

import ResultSearchFriends from '../../ResultSearchFriends/ResultSearchFriends.js'

export default function VerAmigos() {
    return (
        <View style={styles.container}>
            <Header />
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
                    <ResultSearchFriends name="Tiago" />
                </ScrollView>
            </View>

        </View>
    )
}