import React, { useContext } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { styles } from './style'
import { AccountDataContext } from "../../contexts/accountData.js";

export default function Photo( {navigation, image, post_id} ) {
    const { setPostFocusedId } = useContext(AccountDataContext)

    return (
        <TouchableOpacity style={styles.photo}
            onPress={() => {
                setPostFocusedId(post_id)
                navigation.navigate("Editar Foto");
            }}
        >
        <Image source={{ uri: image }} style={{height: '100%', width: '100%', borderRadius: 15}} />

        </TouchableOpacity>
    )
}