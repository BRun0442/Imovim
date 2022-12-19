import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../Header/Header'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function CriarPost() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.photoContainer}>
                <TouchableOpacity styles={styles.button}>
                    <MaterialCommunityIcons name="camera" color={"#fff"} size={26} />
                </TouchableOpacity>
            </View>
        </View>
    );
}