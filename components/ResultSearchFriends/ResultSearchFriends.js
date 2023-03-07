import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style.js'
import { FontAwesome } from '@expo/vector-icons';

export default function ResultSearchFriends(props) {
    return (
        <View style={styles.result}>
            <View style={styles.photoUser}>
                <FontAwesome name="camera" size={20} color="#FFF" />
            </View>
            <Text style={styles.resultText}>{props.name}</Text>
        </View>
    )
}