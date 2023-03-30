import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../Header/Header'
import { styles } from './style'

import NotificationNewFriend from '../../Notifications/NotificationNewFriend/NotificationNewFriend'
import NotificationLike from "../../Notifications/NotificationLike/NotificationLike";
import NotificationComent from "../../Notifications/NotificationComent/NotificationComent";

export default function Notificacoes({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Notificações</Text>
            </View>

            <ScrollView style={styles.notifications}>
                <NotificationNewFriend name="Tiago" city="Taboão da Serra" sports="3 esportes em comum" />
                <NotificationLike name="Tiago" /> 
                <NotificationComent name="Tiago" />
            </ScrollView>

        </SafeAreaView>
    )
}