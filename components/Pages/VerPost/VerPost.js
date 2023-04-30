import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../../contexts/auth";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native"
import Header from "../../Header/Header";
import { styles } from './styles'
import axios from "axios";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import SinglePost from "../../Post/SinglePost";
import Comentario from "../../Comentario/Comentario"
import UsersLikePost from "../../UsersLikePost/UsersLikePost";

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

    const modalizeComents = useRef(null);
    const modalizeLikes = useRef(null);

    const onOpenComent = () => {
        modalizeComents.current?.open();
    };

    const onOpenLike = () => {
        modalizeLikes.current?.open();
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

                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={onOpenLike}
                >
                    <AntDesign name="like1" size={35} color="#FFF" />
                    <View style={styles.interactionQuantityContainer}>
                        <Text style={styles.interactionQuantity}>1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={onOpenComent}
                >
                    <Ionicons name="chatbubble" size={35} color="#FFF" />
                    <View style={styles.interactionQuantityContainer}>
                        <Text style={styles.interactionQuantity}>1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <FontAwesome name="share" size={35} color="#FFF" />
                    <View style={styles.interactionQuantityContainer}>
                        <Text style={styles.interactionQuantity}>1</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <Modalize ref={modalizeComents}>
                <ScrollView>
                    <Comentario />
                </ScrollView>
            </Modalize>

            <Modalize ref={modalizeLikes}>
                <ScrollView contentContainerStyle={styles.containerLikes}>
                    <UsersLikePost name = "Lulu" />
                    <UsersLikePost name = "Põe o nome do menó aqui" />
                    <UsersLikePost name= "Kvalo" />
                </ScrollView>
            </Modalize>

        </View>
    )
}