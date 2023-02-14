import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../Cadastro/styles'
import { defaultStyle } from '../../../assets/style/style';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';
import { CreateUserContext } from '../../../contexts/createUser';
import CreateUser from '../../../services/createUser';

function Cadastro({navigation})
{
  const { setEmail, setPassword, setPasswordConfirm, nickname, birthday, phoneNumber, email, password, passwordConfirm } = useContext(CreateUserContext)

  return(
    <View style={defaultStyle.container}>
      <StatusBar/>
      <Text style={defaultStyle.title}>IMOVIN</Text>

      <Image 
        style={defaultStyle.basketBall} 
        source={basketBall}
      />

      <Image 
        style={defaultStyle.soccerBall} 
        source={soccerBall}
      />

      <View style={defaultStyle.inputContainer}>
        <Text style={defaultStyle.subTitle}>Cadastro</Text>

        <Input width="90%" inputText="Email" getInputValue={(value) => {setEmail(value)}}/>
        <Input width="90%" inputText="Senha" getInputValue={(value) => {setPassword(value)}}/>
        <Input width="90%" inputText="Repetir senha" getInputValue={(value) => {setPasswordConfirm(value)}}/>

        <View style={styles.buttonContainer}>
          <Button buttonText="Cadastrar" pressFunction={() => {
            CreateUser(nickname, email, password, passwordConfirm, birthday, phoneNumber)
          }}
          />

          <Text 
            style={defaultStyle.mediumText} 
            onPress={() => {
              navigation.navigate('Login')
            }}
          >
            Já possui um cadastro?

            <Text 
              style={{
                color: '#FF6709',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
                paddingTop: 5,
              }}
            >
              Login
            </Text>
            
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Cadastro;