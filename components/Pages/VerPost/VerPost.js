import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../../contexts/auth";
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import Header from "../../Header/Header";
import { styles } from './styles'
import axios from "axios";
import { Modalize } from "react-native-modalize";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import SinglePost from "../../Post/SinglePost";
import Post from "../../Post/Post";
import Comentarios from "../Comentarios/Comentarios"

export default function VerPost({ navigation }) {
    const { id, currentPost, setAnotherUser_id } = useContext(AuthContext)
    const [post, setPost] = useState(null)
    const [postId, setPostId] = useState()

    const modalizeRef = useRef(null);

    function onOpen() {
        modalizeRef.current?.open();
    }

    const getPost = async () => {
        const result = await axios.post(`https://imovim-api.cyclic.app/post/get-post`, { post_id: currentPost, user_id: id })
        setPost(result.data)
        setPostId(result.data[0].id)
        console.log(result.data);
    }

    useEffect(() => {
        getPost()
    }, [currentPost])

    if (!post || postId != currentPost) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.imgContainer}>
                {post.map((item, index) => {
                    return (
                        <SinglePost
                            goToProfile={() => {
                                if (item.user_id != id) {
                                    setAnotherUser_id(item.user_id)
                                    navigation.navigate('Outros Perfis')
                                } else {
                                    navigation.navigate('Meu Perfil')
                                }
                            }}

                            {...item}
                        />
                    )
                })}
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <AntDesign name="like1" size={35} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={onOpen} style={styles.iconContainer}>
                    <Ionicons name="chatbubble" size={35} color="#FFF" />
                </TouchableOpacity>

                <Modalize
                    ref={modalizeRef}
                    snapPoint={600}
                >
                    <Comentarios />

                </Modalize>

                <TouchableOpacity style={styles.iconContainer}>
                    <FontAwesome name="share" size={35} color="#FFF" />
                </TouchableOpacity>

            </View>
        </View>
    )
}