import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions, Modal } from "react-native";
import { styles } from "./style";

import Header from "../../Header/Header";
import EditPhotoModal from "../../Modals/EditPhotoModal";
import ProfileImage from "../../ProfileImage/ProfileImage";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import axios from "axios";
import likePost from "../../../services/post";
import { AccountDataContext } from "../../../contexts/accountData";
import { AuthContext } from "../../../contexts/auth";

let screenWidth = Dimensions.get("window").width / 100; // screen width

export default function EditPhoto({ navigation }, props) {
    const { profilePicture, username } = useContext(AuthContext);
    const { postFocusedId } = useContext(AccountDataContext)
    const { id, setChangePosts, changePosts } = useContext(AuthContext)
    const [postImage, setPostImage] = useState(null)
    const [postId, setPostId] = useState(null)
    const [created_at, setCreated_at] = useState()
    const [commentNumber, setCommentNumber] = useState(null)
    const [likeNumber, setLikeNumber] = useState(null)
    const [itemId, setItemId] = useState(null)
    const [userLikedPost, setUserLikedPost] = useState(null)

    const [visibleModal, setVisibleModal] = useState(false)

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [aspectRatio, setAspectRatio] = useState(0);

    const deletePost = async () => {
        const data = {
            post_id: postId,
            user_id: id
        }
        await axios.post(`https://imovim-api.cyclic.app/post/delete-post`, data)
            .then(response => {
                setChangePosts(changePosts + 1)
                navigation.navigate('Fotos')
            })
    }

    async function getImagesSize(image) {
        // Use the width and height props to optimize
        await Image.getSize(image, (width, height) => {
            setHeight(height);
            setWidth(width);
        })

        setAspectRatio(width / height)
    }

    const ImageStyle = {
        style: [
            styles.postImage,
            postImage ?
                aspectRatio >= 1 ?
                    { height: (90 * screenWidth / aspectRatio) }
                    : { height: 450 }
                : { height: 0 }
        ]
    }
    
    const getPost = async () => {
        const result = await axios.post(`https://imovim-api.cyclic.app/post/get-post`, { post_id: postFocusedId, user_id: id })
        setPostImage(result.data[0].image)
        setPostId(result.data[0].id)
        setCreated_at(result.data[0].created_at)
        setLikeNumber(result.data[0].likes)
        setCommentNumber(result.data[0].comments)
        setItemId(result.data[0].id)
        setUserLikedPost(result.data[0].userLikedPost)

        console.log(result.data);

        result.data[0].image && getImagesSize(result.data[0].image);
    }

    useEffect(() => {
        // if image is empty it doesnt call function
        getPost()
    }, [changePosts])

    return (
        <View>
            <Header navigation={navigation} />

            <View style={styles.postBackground}>
                <View style={styles.postContainer}>

                    <View style={styles.headerPost} >
                        <View style={styles.postProfile}>
                            <ProfileImage profileImage={profilePicture} />

                            <View style={styles.profileContainer}>
                                <Text style={styles.profileName}>{username}</Text>
                                <Text style={styles.postDate}>{created_at}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => setVisibleModal(true)}>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>...</Text>
                            </TouchableOpacity>

                            <Modal
                                visible={visibleModal}
                                transparent={true}
                                onRequestClose={() => setVisibleModal(false)}
                            >
                                <EditPhotoModal
                                    deletePost={deletePost}
                                    handleClose={() => setVisibleModal(false)}
                                />
                            </Modal>

                        </View>
                    </View>


                    <Image
                        style=
                        {
                            ImageStyle.style
                        }
                        source={
                            postImage ? { uri: postImage } : ''
                        }
                    />

                    <Text style={styles.postDescription}>{props.caption}</Text>

                    <View style={styles.postInteraction}>
                        <TouchableOpacity onPress={async () => {
                            await likePost(id, itemId);
                            getPost()
                        }} style={styles.postInteractionImage}>
                            <AntDesign name="like1" size={24} color={userLikedPost == 0 ? "#FFF" : "#F8670E"} />
                            <Text style={styles.interactionQuantity}>{likeNumber}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Comentarios")} style={styles.postInteractionImage}>
                            <Ionicons name="chatbubble" size={24} color="#FFF" />
                            <Text style={styles.interactionQuantity}>{commentNumber}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.postInteractionImage}>
                            <FontAwesome name="share" size={24} color="#FFF" />
                            <Text style={styles.interactionQuantity}>0</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}