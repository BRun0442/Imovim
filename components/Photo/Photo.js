import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './style'

export default function Photo( {navigation}, props) {
    return (
        <TouchableOpacity style={styles.photo}
            onPress={() => {
                navigation.navigate("Editar Foto");
            }}
        >

        </TouchableOpacity>
    )
}