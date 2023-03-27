import React, { useState, useContext, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, FlatList } from 'react-native'
import Header from '../../Header/Header'
import Photo from "../../Photo/Photo";
import { styles } from './style'
import { AuthContext } from "../../../contexts/auth";
import axios from "axios";

export default function Fotos({ navigation }) {
    const { id } = useContext(AuthContext)
    const [posts, setPosts] = useState([1, 2, 3, 4, 5])

    useEffect(() => {
        const result = axios.get(`https://imovim-api.cyclic.app/posts/get-posts-of-user/${id}`)
        console.log(result)
        setPosts(result)
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Fotos</Text>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <FlatList 
                    numColumns={3}
                    data={posts}
                    renderItem={({item}) => 
                        <View style={styles.photos}>
                            <Photo navigation={navigation} />
                        </View>
                    }
                />
            </View>
        </SafeAreaView >
    )
}