import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars';

import { AntDesign } from '@expo/vector-icons';

export default function Calendario({ handleClose, setDate }) {
    const [selected, setSelected] = useState('');

    console.log(selected);

    return (
        <View style={styles.modal}>

            <View style={styles.calendarContainer}>

                <View style={styles.titleContainer}>

                    <TouchableOpacity onPress={handleClose}>
                        <AntDesign name="close" size={24} color="#FFF" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Selecione a data:</Text>
                </View>

                <Calendar
                    style={styles.calendar}
                    onDayPress={day => {
                        setSelected(day.dateString);
                        setDate(day.dateString)
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: "100%",
        height: "100%",

        display: "flex",
        justifyContent: "center",

        paddingHorizontal: 5,
    },

    titleContainer:{
        width: "100%",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 15,
    },

    title:{
        fontSize: 16,
        color: "#FFF",
        fontWeight: "bold",

        marginHorizontal: 10
    },

    calendarContainer: {
        padding: 15,

        backgroundColor: "#F8670E",

        borderRadius: 15
    }
})