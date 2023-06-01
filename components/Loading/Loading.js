import { View, Text, Image } from 'react-native'
import { styles } from './style'
import LoadingImage from '../../assets/IMOVIM.gif'

export default function Loading(props) {
    return (
        <View style={[styles.container, {height: props.height}]}>
            <Text style={styles.text}>Carregando...</Text>
            <Image style={styles.loadingImage} source={LoadingImage} />
        </View>
    )
}