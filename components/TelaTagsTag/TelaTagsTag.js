import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style.js'
import { getSportsPracticed } from '../../services/sports.js'
import { AuthContext } from '../../contexts/auth.js'
import { insertSportPracticed } from '../../services/sports.js'

export default function VerMaisTags(props) {
    const { id, sportsPracticed, setSportsPracticed } = useContext(AuthContext)

    const getData = async () => {
        if (!sportsPracticed) {
            const data = await getSportsPracticed(id)
            setSportsPracticed(data)
            console.log(data)
        }
    }

    const updateData = async () => {
        const data = await getSportsPracticed(id)
        setSportsPracticed(data)
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = async (id, sport_id) => {
        console.log(id, sport_id)
        await insertSportPracticed(id, sport_id)
        await updateData()
    }

    const handleButtonColor = () => {
        if(sportsPracticed.includes(props.nameEsportTag)) {
            return { backgroundColor: props.color }
        } 
        else {
            return { backgroundColor: "#565353" }
        }
    }

    if(!sportsPracticed) {
        return (
            <View />
        )
    }

    return (
        <TouchableOpacity onPress={() => handleSubmit(id, props.sport_id)} style={[styles.tag, handleButtonColor()]}>
            <Text style={styles.text}>#{props.nameEsportTag}</Text>
        </TouchableOpacity>
    )
}