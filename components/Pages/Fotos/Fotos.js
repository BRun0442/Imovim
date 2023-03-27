import React, { useState, useContext, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, FlatList } from 'react-native'
import Header from '../../Header/Header'
import Photo from "../../Photo/Photo";
import { styles } from './style'
import { AuthContext } from "../../../contexts/auth";
import axios from "axios";

export default function Fotos({ navigation }) {
    const { id, changePosts } = useContext(AuthContext)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://imovim-api.cyclic.app/post/get-posts-of-user/${id}`)
            console.log(result.data)
            setPosts(result.data)
        }
        getData()
    }, [changePosts])

    return (
        <SafeAreaView style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Fotos</Text>
            </View>

            <View style={{ marginHorizontal: 10, backgroundColor: "#F1F1F1" }}>
                <FlatList 
                    numColumns={3}
                    data={posts}
                    renderItem={({item}) => 
                        <View style={styles.photos}>
                            <Photo post_id={item.id} image={item.image} navigation={navigation} />
                        </View>
                    }
                />
            </View>
        </SafeAreaView >
    )
}