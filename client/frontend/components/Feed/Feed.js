import React from 'react'
import { View, Text, Button } from 'react-native'
import { auth } from '../../firebase/config'
import { signOut } from 'firebase/auth'

function Feed() {

  return (
    <View>
        <Text>Feed</Text>
        <Button 
            title='Sair'
            onPress={() => signOut(auth)}
        />
    </View>
  )
}

export default Feed