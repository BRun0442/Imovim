import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style.js'
import { getSports as getSportsData } from '../../services/sports.js'
import { AuthContext } from '../../contexts/auth.js'

export default function VerMaisTags(props) {

    return (
        <View style={[styles.tag, {backgroundColor: props.sport_color}]}>
            <Text style={styles.text}># {props.sport_name}</Text>
        </View>
    )
}