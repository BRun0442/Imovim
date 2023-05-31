import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Vibration } from "react-native"
import { Modalize } from "react-native-modalize";
import { styles } from './styles'

import Header from "../../Header/Header";
import SinglePost from "../../Post/SinglePost";
import Comentario from "../../Comentario/Comentario"
import UsersLikePost from "../../UsersLikePost/UsersLikePost";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import axios from "axios";
import { getComments } from "../../../services/comment";
import { AuthContext } from "../../../contexts/auth";

export default function VerPost({ navigation }) {
    const { id, currentPost, setAnotherUser_id } = useContext(AuthContext)
    const [post, setPost] = useState(null)
    const [postId, setPostId] = useState()
    const [likeList, setLikeList] = useState(null)
    const [comments, setComments] = useState(null)
    const [likeAmmount, setLikeAmmount] = useState()
    const [commentsAmmount, setCommentsAmmount] = useState()

    const getPost = async () => {
        const result = await axios.post(`https://imovim-api.cyclic.app/post/get-post`, { post_id: currentPost, user_id: id })
        setPost(result.data)
        setPostId(result.data[0].id)
        setLikeAmmount(result.data[0].likes)
        setCommentsAmmount(result.data[0].comments)
        console.log(result.data);
    }

    const getLikeList = async () => {
        const result = await axios.get(`https://imovim-api.cyclic.app/post/get-like-list/${currentPost}`)
        setLikeList(result.data)
        console.log(result.data);
    }

    const goToProfile = async (user_id) => {
        if (user_id == id) {
            navigation.navigate('Meu Perfil')
        } else {
            setAnotherUser_id(user_id)
            navigation.navigate('Outros Perfis')
        }
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
        getLikeList()
        getComments(currentPost, setComments)
    }, [currentPost])

    if (!post || postId != currentPost || !likeList || !comments) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />

            {post.map((item, index) => {
                return (
                    <View style={styles.imgContainer}>
                        <SinglePost
                            getPost={getPost}
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
                    onLongPress={() => {
                        onOpenLike()
                        Vibration.vibrate(50)
                    }}
                >
                    <AntDesign name="like1" size={35} color="#FFF" />
                    <View style={styles.interactionQuantityContainer}>
                        <Text style={styles.interactionQuantity}>{likeAmmount}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => onOpenComent()}
                >
                    <Ionicons name="chatbubble" size={35} color="#FFF" />
                    <View style={styles.interactionQuantityContainer}>
                        <Text style={styles.interactionQuantity}>{commentsAmmount}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <FontAwesome name="share" size={35} color="#FFF" />
                    <View style={styles.interactionQuantityContainer}>
                        <Text style={styles.interactionQuantity}>0</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <Modalize ref={modalizeComents}>
                <ScrollView contentContainerStyle={styles.containerLikes}>
                    {comments.map((item, index) => {
                        return (
                            <Comentario
                                key={index}
                                comment_id={item.comment_id}
                                updated={item.updated}
                                user_id={item.user_id}
                                profileImage={item.profileImage}
                                profileName={item.nickname}
                                daysAgo={item.created_at}
                                coment={item.comment}
                                getComments={() => getComments(currentPost, setComments)}
                            />
                        )
                    })}
                </ScrollView>
            </Modalize>

            <Modalize ref={modalizeLikes}>

                <ScrollView contentContainerStyle={styles.containerLikes}>
                    {likeList.map((like, index) => {
                        return (
                            <UsersLikePost
                                key={index}
                                goToProfile={goToProfile}
                                user_id={like.user_id}
                                profileImage={like.profileImage}
                                name={like.nickname}
                            />
                        )
                    })}
                </ScrollView>

            </Modalize>
        </View >
    )
}