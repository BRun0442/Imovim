import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions, Modal, SafeAreaView } from "react-native";
import { styles } from "./style";
import ProfileImage from "../../ProfileImage/ProfileImage";
import RenderImage from "../../RenderImage/RenderImage";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import Header from "../../Header/Header";
import EditPhotoModal from "../../Modals/EditPhotoModal";
import { AccountDataContext } from "../../../contexts/accountData";
let screenWidth = Dimensions.get("window").width / 100; // screen width
import { AuthContext } from "../../../contexts/auth";

export default function EditPhoto( {navigation} ,props) {
    const { postFocusedId } = useContext(AccountDataContext)
    const { id, setChangePosts, changePosts } = useContext(AuthContext)
    const [postImage, setPostImage] = useState(null)
    const [postId, setPostId] = useState(null)
    
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
        const result = await axios.get(`https://imovim-api.cyclic.app/post/get-post/${postFocusedId}`)
        setPostImage(result.data[0].image)
        setPostId(result.data[0].id)
        result.data[0].image && getImagesSize(result.data[0].image);
    }

    useEffect(() => {
        // if image is empty it doesnt call function
        getPost()
    }, [])

    return (
        <SafeAreaView>
            <Header navigation={navigation} />

            <View style={styles.postBackground}>
                <View style={styles.postContainer}>

                    <View style={styles.headerPost} >
                        <View style={styles.postProfile}>
                            <ProfileImage profileImage={props.profileImage} />

                            <View style={styles.profileContainer}>
                                <Text style={styles.profileName}>{props.nickname}</Text>
                                <Text style={styles.postDate}>{props.created_at}</Text>
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
                        <TouchableOpacity onPress={props.likePost} style={styles.postInteractionImage}>
                            <AntDesign name="like1" size={24} color="white" />
                            <Text style={styles.interactionQuantity}>{props.likes}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.goToCommentScreen()} style={styles.postInteractionImage}>
                            <Ionicons name="chatbubble" size={24} color="white" />
                            <Text style={styles.interactionQuantity}>{props.comments}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.postInteractionImage}>
                            <FontAwesome name="share" size={24} color="white" />
                            <Text style={styles.interactionQuantity}>{props.updated}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}