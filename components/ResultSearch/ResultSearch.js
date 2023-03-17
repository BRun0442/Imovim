import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style.js'
import { FontAwesome } from '@expo/vector-icons';

export default function ResultSearch({ navigation, nickname, profileImage }, props) {
    return (
        <TouchableOpacity
            style={styles.result}
            onPress={() => { navigation.navigate('Outros Perfis') }}
        >
            <View>
                {
                    !profileImage ?
                        <View style={styles.photoUser}>
                            <FontAwesome name="camera" size={20} color="#FFF" />
                        </View>
                        :
                        <Image style={styles.profileImage} source={{ uri: profileImage }} />
                }
            </View>
            <Text style={styles.resultText}>{nickname}</Text>
        </TouchableOpacity>
    )
}