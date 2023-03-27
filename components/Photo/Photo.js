import React, { useContext } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { styles } from './style'
import { AccountDataContext } from "../../contexts/accountData.js";
import { AuthContext } from '../../contexts/auth';

export default function Photo( {navigation, image, post_id} ) {
    const { setPostFocusedId } = useContext(AccountDataContext)
    const { setChangePosts, changePosts } = useContext(AuthContext)

    return (
        <TouchableOpacity style={styles.photo}
            onPress={() => {
                setPostFocusedId(post_id)
                setChangePosts(changePosts + 1)
                navigation.navigate("Editar Foto");
            }}
        >
        <Image source={{ uri: image }} style={{height: '100%', width: '100%'}} />

        </TouchableOpacity>
    )
}