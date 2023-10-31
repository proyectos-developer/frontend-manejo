import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen           from './src/components/begin/login.jsx'
import RegistroScreen        from './src/components/begin/registro.jsx'
import InicioSesionScreen    from './src/components/begin/iniciosesion.jsx'
import RestablecerPassScreen from './src/components/begin/restablecerpass.jsx'
import ActualizarPassScreen  from './src/components/begin/actualizarpass.jsx'
import ActualizarDatosScreen from './src/components/begin/actualizardatos.jsx'

const StackBegin = createNativeStackNavigator()

/**retira la barra por defecto */
const navOptionHandler = () => ({
  headerShown: false
})

export default function App() {

    return (  
          <NavigationContainer>
              <StackBegin.Navigator initialRouteName='LoginScreen'>
                  {/**<StackBegin.Screen name='LoadingScreen' component={LoadingScreen} options={navOptionHandler}/>**/}
                  <StackBegin.Screen name='LoginScreen'            component={LoginScreen}           options={navOptionHandler}/>
                  <StackBegin.Screen name='RegistroScreen'         component={RegistroScreen}        options={navOptionHandler}/>
                  <StackBegin.Screen name='InicioSesionScreen'     component={InicioSesionScreen}    options={navOptionHandler}/>
                  <StackBegin.Screen name='RestablecerPassScreen'  component={RestablecerPassScreen} options={navOptionHandler}/>
                  <StackBegin.Screen name='ActualizarPassScreen'   component={ActualizarPassScreen}  options={navOptionHandler}/>
                  <StackBegin.Screen name='ActualizarDatosScreen'  component={ActualizarDatosScreen}  options={navOptionHandler}/>
              </StackBegin.Navigator>
          </NavigationContainer>
    );
}
