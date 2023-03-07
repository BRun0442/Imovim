import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import { defaultStyle } from '../../../assets/style/style';
import Input from '../../Input/Input.js';
import Button from '../../Button/Button.js';
import basketBall from '../../../assets/bolaBasquete.png';
import soccerBall from '../../../assets/bolaFutebol.png';
import { AuthContext } from '../../../contexts/auth.js';
import ValidateData from '../../../services/login.js';
import { AccountDataContext } from '../../../contexts/accountData';

function Login({navigation})
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLogin } = useContext(AuthContext);
  const { setId } = useContext(AuthContext);
  const { setAccountData } = useContext(AccountDataContext);

  return(
    <View style={defaultStyle.container}>
      <StatusBar/>
      <Text style={defaultStyle.title}>Imovim</Text>

      <Image 
        style={defaultStyle.basketBall} 
        source={basketBall}
      />

      <Image 
        style={defaultStyle.soccerBall} 
        source={soccerBall}
      />

      <View style={defaultStyle.inputContainer}>
        <Text style={defaultStyle.subTitle}>Login</Text>
        <Input width="90%" inputText="Email" getInputValue={(value) => setEmail(value)}/>

        <View style={styles.passwordContainer}>
          <Input width="90%" inputText="Senha" getInputValue={(value) => setPassword(value)}/>
          <Text style={defaultStyle.smallText}>Esqueci minha senha</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button buttonText="Entrar" pressFunction={() => {
              ValidateData(email, password, setLogin, setId, setAccountData)
            }
          }/>
          <Text style={defaultStyle.mediumText}>Não possui cadastro?</Text>
          <Text 
            style={{
              color: '#FF6709',
              fontSize: 16,
              fontWeight: '700',
              textAlign: 'center',
              paddingTop: 5,
            }}
            onPress={() => {navigation.navigate('Cadastro')}}
          >
              Cadastre-se aqui
          </Text>
        </View>
      </View>
      <StatusBar />
    </View>
  );
}

export default Login;