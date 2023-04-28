import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../../contexts/auth";
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import Header from "../../Header/Header";
import { styles } from './styles'
import Post from "../../Post/Post";
import axios from "axios";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import SinglePost from "../../Post/SinglePost";

import { Modalize } from "react-native-modalize";

export default function VerPost({ navigation }) {
    const { id, currentPost, setAnotherUser_id } = useContext(AuthContext)
    const [post, setPost] = useState(null)
    const [postId, setPostId] = useState()

    const getPost = async () => {
        const result = await axios.post(`https://imovim-api.cyclic.app/post/get-post`, { post_id: currentPost, user_id: id })
        setPost(result.data)
        setPostId(result.data[0].id)
        console.log(result.data);
    }

    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

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

            {post.map((item, index) => {
                return (
                    <View style={styles.imgContainer}>
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
                    </View>
                )
            })}

            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <AntDesign name="like1" size={35} color="#FFF" />

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={onOpen}
                >
                    <Ionicons name="chatbubble" size={35} color="#FFF" />

                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <FontAwesome name="share" size={35} color="#FFF" />
                </TouchableOpacity>

            </View>

            <Modalize ref={modalizeRef}>
                <View>
                    <Text>Teste</Text>
                </View>
            </Modalize>

        </View>
    )
}