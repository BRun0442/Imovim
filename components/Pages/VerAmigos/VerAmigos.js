import React from "react";
import { View, Text, TextInput, SafeAreaView} from 'react-native'
import { styles } from './style.js'
import Header from "../../Header/Header.js";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

import ResultSearchFriends from "../../ResultSearchFriends/ResultSearchFriends.js";

export default function VerAmigos({ navigation }) {
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
                    <ResultSearchFriends name="Tiago" />
                    <ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" /><ResultSearchFriends name="Tiago" />
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}