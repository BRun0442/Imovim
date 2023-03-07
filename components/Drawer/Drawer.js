import react, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Feed from '../Pages/Feed/Feed';
import Perfil from '../Pages/PerfilVisãoInterna/Perfil.js'
import Eventos from '../Pages/Eventos/Eventos';
import CriarPost from '../Pages/CriarPost/CriarPost';
import EditarPerfil from '../Pages/EditarPerfil/EditarPerfil';
import TelaVerMais from '../Pages/TelaVerMais/TelaVerMais';
import TelaTags from '../Pages/TelaTags/TelaTags';
import { AccountDataContext } from '../../contexts/accountData';
// import CreateAccountDataContext from '../../contexts/accountData';

import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const { accountData } = useContext(AccountDataContext);

  console.log('teste', accountData)

  

  return (
    <Drawer.Navigator 
      drawerContent={props => 
        <CustomDrawer {...props} accountData={accountData}/>
      } 

      initialRouteName='Feed'
    >

      <Drawer.Screen name="Página Inicial" component={Feed} options={{ headerShown: false, }} />
      <Drawer.Screen name="Perfil" accountData={accountData} component={Perfil} options={{ headerShown: false, }} />
      <Drawer.Screen name="Eventos" component={Eventos} options={{ headerShown: false, }} />
      <Drawer.Screen name="CriarPost" component={CriarPost} options={{ headerShown: false, }} />
      <Drawer.Screen name="Editar Perfil" component={EditarPerfil} options={{ headerShown: false, }} />
      <Drawer.Screen name="Tela Tags" component={TelaTags} options={{ headerShown: false, }} />
      <Drawer.Screen name="Tela Ver Mais" component={TelaVerMais} options={{ headerShown: false, }} />
    </Drawer.Navigator>
  );
}