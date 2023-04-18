import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style.js'
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth.js';

export default function ResultSearch({ navigation, nickname, profileImage, user_id }, props) {
    const { anotherUser_id, setAnotherUser_id } = useContext(AuthContext)
    return (
        <TouchableOpacity
            style={styles.result}
            onPress={() => { 
                setAnotherUser_id(user_id)
                navigation.navigate('Outros Perfis') 
            }}
        >
            <View>
               
                        <Image style={styles.profileImage} source={{
                            uri:
                              profileImage ||
                              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                          }} />
            </View>
            <Text style={styles.resultText}>{nickname}</Text>
        </TouchableOpacity>
    )
}