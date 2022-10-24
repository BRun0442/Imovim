import React from 'react'
import { Button, View, Text, StatusBar } from 'react-native'

function Landing({ navigation }) {
  return (
    <View>
        <Button 
            title='Cadastre-se'
            onPress={() => navigation.navigate("Cadastro")}
        />

        <Button 
            title='Logar'
            onPress={() => navigation.navigate("Login")}
        />
        <Text>Boas Vindas!</Text>
        <StatusBar />
    </View>
  )
}

export default Landing