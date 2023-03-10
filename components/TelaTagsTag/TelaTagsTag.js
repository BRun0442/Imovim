import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style.js'

export default function VerMaisTags(props) {
    return (
        <TouchableOpacity style={styles.tag}>
            <Text style={styles.text}>#{props.nameEsportTag}</Text>
        </TouchableOpacity>
    )
}