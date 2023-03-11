import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from './style.js'
import Header from '../../Header/Header'
import { Entypo } from '@expo/vector-icons';

import ResultSearch from '../../ResultSearch/ResultSearch.js'

export default function Pesquisa({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder='Pesquise amigos, eventos etc.'>
                    <Entypo style={{ marginRight: 15 }} name="magnifying-glass" size={25} color="#FF7926" />
                </TextInput>
            </View>

            <View style={styles.tags}>
                <Text style={styles.tag}>Pessoas</Text>
                <Text style={styles.tag}>Eventos</Text>
                <Text style={styles.tag}>Publicações</Text>
            </View>

            <ScrollView>
                <View style={styles.results}>
                  <ResultSearch name="Tiago" />
                </View>
            </ScrollView>

        </View>
    )
}