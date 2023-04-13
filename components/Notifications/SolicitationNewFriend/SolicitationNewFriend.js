import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { styles } from "./style";

export default function SolicitationNewFriend(props) {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <View style={styles.iconCam}>
                    {/* <Image source={uri:} /> */}
                    <Entypo name="camera" size={18} color="white" />
                </View>

                <View style={styles.data}>
                    <Text style={{ fontWeight: "600", fontSize: 18 }}>{props.name}</Text>
                    <Text>{props.city}</Text>
                    <Text>{props.numberComumSports} esporte em comum</Text>
                    {/* se for só um esporte renderiza ESPORTE, se forem dois ou mais ESPORTESSS */}
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.aceptButton}>
                    <Text style={styles.textButton}>Aceitar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.textButton}>Excluir</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}