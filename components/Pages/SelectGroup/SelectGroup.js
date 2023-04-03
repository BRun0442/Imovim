import React from 'react'
import { View, Text, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './style.js'
import Header from '../../Header/Header'
import { Entypo } from '@expo/vector-icons';
import ResultSearch from '../../ResultSearch/ResultSearch';
import { MaterialIcons } from '@expo/vector-icons';

export default function SelectGroup({ navigation }) {
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

                    <TextInput style={styles.searchInput} placeholder='Pesquise pessoas...' />
                </View>

                <ScrollView style={{ marginBottom: 30 }}>
                    <View style={styles.results}>

                        {/* <ResultSearch /> */}

                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}