import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './style.js'
import { FontAwesome } from '@expo/vector-icons';

export default function ResultSearch({ navigation, nickname }) {
    return (
        <TouchableOpacity
            style={styles.result}
            onPress={() => { navigation.navigate('Outros Perfis') }}
        >
            <View style={styles.photoUser}>
                <FontAwesome name="camera" size={20} color="#FFF" />
            </View>
            <Text style={styles.resultText}>{nickname}</Text>
        </TouchableOpacity>
    )
}