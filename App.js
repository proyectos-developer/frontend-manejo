import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

import LoginScreen           from './src/components/begin/login.jsx'
import RegistroScreen        from './src/components/begin/registro.jsx'
import InicioSesionScreen    from './src/components/begin/iniciosesion.jsx'
import RestablecerPassScreen from './src/components/begin/restablecerpass.jsx'
import ActualizarPassScreen  from './src/components/begin/actualizarpass.jsx'
import ActualizarDatosScreen from './src/components/begin/actualizardatos.jsx'

import ResultadosScreen      from './src/components/home/resultados.jsx'

import SeleccionScreen       from './src/components/home/seleccion.jsx'
import CatgoriaUnoStack      from './src/components/home/categoriauno/main.jsx'
import CatgoriaDosStack      from './src/components/home/categoriados/main.jsx'
import CatgoriaTresStack     from './src/components/home/categoriatres/main.jsx'
import CatgoriaCuatroStack   from './src/components/home/categoriacuatro/main.jsx'
import CatgoriaCincoStack    from './src/components/home/categoriacinco/main.jsx'

import { useEffect } from 'react';

const StackBegin           = createNativeStackNavigator()
const StackHome            = createNativeStackNavigator()

/**retira la barra por defecto */
const navOptionHandler = () => ({
  headerShown: false
})

function HomeStack (){

    return(
        <StackHome.Navigator initialRouteName='ResultadosScreen'>
            <StackHome.Screen name='ResultadosScreen'     component={ResultadosScreen}       options={navOptionHandler}/>
            <StackHome.Screen name='SeleccionScreen'      component={SeleccionScreen}       options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaUnoStack'    component={CatgoriaUnoStack}      options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaDosStack'    component={CatgoriaDosStack}      options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaTresStack'   component={CatgoriaTresStack}     options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaCuatroStack' component={CatgoriaCuatroStack}   options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaCincoStack'  component={CatgoriaCincoStack}    options={navOptionHandler}/>
        </StackHome.Navigator>
    )
}

export default function App() {

    const fontsLoaded = {
        'Nunito-Medium':    require('./src/assets/fonts/Nunito-Medium.ttf'),
        'Nunito-Black':     require('./src/assets/fonts/Nunito-Black.ttf'),
        'Nunito-ExtraBold': require('./src/assets/fonts/Nunito-ExtraBold.ttf'),
        'Nunito-Black':     require('./src/assets/fonts/Nunito-Black.ttf'),
        'Nunito-Regular':   require('./src/assets/fonts/Nunito-Regular.ttf'),
        'Nunito-Bold':      require('./src/assets/fonts/Nunito-Bold.ttf'),
        'Nunito-SemiBold':  require('./src/assets/fonts/Nunito-SemiBold.ttf'),
    }

    useEffect(() => {
        load_font_async ()
    }, [])

    const load_font_async = async() => {
        await Font.loadAsync(fontsLoaded)
    }

    return (  
        <Provider store={store}>
            <NavigationContainer>
                <StackBegin.Navigator initialRouteName='HomeStack'>
                    {/**<StackBegin.Screen name='LoadingScreen' component={LoadingScreen} options={navOptionHandler}/>**/}
                    <StackBegin.Screen name='HomeStack'              component={HomeStack}     options={navOptionHandler}/>
                    <StackBegin.Screen name='LoginScreen'            component={LoginScreen}            options={navOptionHandler}/>
                    <StackBegin.Screen name='RegistroScreen'         component={RegistroScreen}         options={navOptionHandler}/>
                    <StackBegin.Screen name='InicioSesionScreen'     component={InicioSesionScreen}     options={navOptionHandler}/>
                    <StackBegin.Screen name='RestablecerPassScreen'  component={RestablecerPassScreen}  options={navOptionHandler}/>
                    <StackBegin.Screen name='ActualizarPassScreen'   component={ActualizarPassScreen}   options={navOptionHandler}/>
                    <StackBegin.Screen name='ActualizarDatosScreen'  component={ActualizarDatosScreen}  options={navOptionHandler}/>
                </StackBegin.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
