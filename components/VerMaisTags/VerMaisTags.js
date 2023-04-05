import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style.js'
import { getSports as getSportsData } from '../../services/sports.js'

export default function VerMaisTags(props) {
    const [sports, setSports] = useState([])
    const [backgroundColor, setBackgroundColor] = useState()

    const getSports = async () => {
        const data = await getSportsData()
        setSports(data)
        handleButtonColor(data)
        console.log(data)
        return data
    }
    const handleButtonColor = (sportsData) => {
        sportsData.forEach((i) => {
            if(i.sport_name == props.nameTag){
                console.log({ backgroundColor: i.sport_color });
                setBackgroundColor({ backgroundColor: i.sport_color })
                return { backgroundColor: i.sport_color }
            }
        });
    }

    useEffect(() => {
        getSports()
    }, [])
    

    if (!sports) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View style={[styles.tag, backgroundColor]}>
            <Text style={styles.text}>#{props.nameTag}</Text>
        </View>
    )
}