import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../Pages/Feed/Feed';
import Perfil from '../Pages/PerfilVisãoInterna/Perfil.js'
import Eventos from '../Pages/Eventos/Eventos';
import CriarPost from '../Pages/CriarPost/CriarPost';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName='Feed'>
      <Drawer.Screen name="Página Inicial" component={Feed} options={{ headerShown: false, }} />
      <Drawer.Screen name="Meu Perfil" component={Perfil} options={{ headerShown: false, }} />
      <Drawer.Screen name="Eventos" component={Eventos} options={{ headerShown: false, }} />
      <Drawer.Screen name="CriarPost" component={CriarPost} options={{ headerShown: false, }} />
    </Drawer.Navigator>
  );
}