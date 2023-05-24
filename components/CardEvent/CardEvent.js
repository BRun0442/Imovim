import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style"
import { FontAwesome5 } from '@expo/vector-icons';

export default function CardEvents(props) {
    return (
        <View style={[styles.eventCard, {width: props.width}]}>
            
            <View style={styles.titleContainer}>
                <FontAwesome5 name="calendar-plus" size={20} color="#F8670E" />
                <Text style={styles.title}>{props.eventName}</Text>
            </View>

            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.eventImage }}
                />
            </View>

            <View style={styles.describeContainer}>
                <Text style={styles.describe}>{props.describeEvent}</Text>
            </View>

        </View>
    )
}