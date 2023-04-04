import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style.js'
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth.js';

export default function UserSelected({ nickname, profileImage, user_id }, props) {
    const { anotherUser_id, setAnotherUser_id } = useContext(AuthContext)
    return (
        <TouchableOpacity
            style={styles.result}
            onPress={() => {
            }}
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