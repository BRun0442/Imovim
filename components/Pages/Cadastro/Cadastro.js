import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import { defaultStyle } from '../../../assets/style/style';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';
import { CreateUserContext } from '../../../contexts/createUser';

function Cadastro({navigation})
{
  const { setNickname, setBirthday, setPhoneNumber } = useContext(CreateUserContext)
  let phoneNumber = ['', '']
  let birthday = ['', '', '']


  return(
    <View style={defaultStyle.container}>
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
        <Input width="90%" inputText="Nome" getInputValue={(value) => {setNickname(value)}}/>

        <View style={styles.textBox}>
          <Text style={defaultStyle.defaultText}>Data de nascimento</Text>

          <TextInput 
            style={styles.input} 
            placeholder='dd'
            placeholderTextColor="#DCDCDC" 
            textAlign="center"
            onChangeText={(value) => {birthday[0] = value}}
          >
          </TextInput>

          <TextInput 
            style={styles.input} 
            placeholder='mm'
            placeholderTextColor="#DCDCDC" 
            textAlign="center"
            onChangeText={(value) => {birthday[1] = value}}
          >
          </TextInput>

          <TextInput 
            style={styles.input} 
            placeholder='aaaa'
            placeholderTextColor="#DCDCDC" 
            textAlign="center"
            onChangeText={(value) => {birthday[2] = value}}
          >
          </TextInput>

        </View>

        <View style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "85%",
          marginLeft: 25,
        }}
        >
          <TextInput
            style={styles.input}
            placeholder='DDD'
            placeholderTextColor="#DCDCDC"
            textAlign="center"
            onChangeText={(value) => {phoneNumber[0] = value}}
          >
          </TextInput>

          <TextInput
            style={styles.input}
            placeholder='Telefone'
            placeholderTextColor="#DCDCDC"
            textAlign="center"
            onChangeText={(value) => {phoneNumber[1] = value}}
          >
          </TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <Button buttonText="Avançar" pressFunction =
          {() => 
            {
              phoneNumber.reverse();
              birthday.reverse()

              console.log(phoneNumber.join(''));
              console.log(birthday.join(''));
              
              setPhoneNumber(
                phoneNumber.join('')
              );
              setBirthday(
                birthday.join('')
              );
              navigation.navigate('CadastroContinuacao')
            }
          }
          />

          <Text 
            style={defaultStyle.mediumText} 
            onPress={() => {navigation.navigate('Login')}}
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