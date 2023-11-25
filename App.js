import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen         from './src/components/begin/loading.jsx'
import LoginScreen           from './src/components/begin/login.jsx'
import RegistroScreen        from './src/components/begin/registro.jsx'
import InicioSesionScreen    from './src/components/begin/iniciosesion.jsx'
import RestablecerPassScreen from './src/components/begin/restablecerpass.jsx'
import ActualizarPassScreen  from './src/components/begin/actualizarpass.jsx'
import ActualizarDatosScreen from './src/components/begin/actualizardatos.jsx'

import SeleccionScreen           from './src/components/home/seleccion.jsx'
import CategoriaUnoPreguntas     from './src/components/home/categoriauno/preguntas.jsx'
import CategoriaUnoRespuestas    from './src/components/home/categoriauno/respuestas.jsx'
import CategoriaDosPreguntas     from './src/components/home/categoriados/preguntas.jsx'
import CategoriaDosRespuestas    from './src/components/home/categoriados/respuestas.jsx'
import CategoriaTresPreguntas    from './src/components/home/categoriatres/preguntas.jsx'
import CategoriaTresRespuestas   from './src/components/home/categoriatres/respuestas.jsx'
import CategoriaCuatroPreguntas  from './src/components/home/categoriacuatro/preguntas.jsx'
import CategoriaCuatroRespuestas from './src/components/home/categoriacuatro/respuestas.jsx'
import CategoriaCincoPreguntas   from './src/components/home/categoriacinco/preguntas.jsx'
import CategoriaCincoRespuestas  from './src/components/home/categoriacinco/respuestas.jsx'
import ResultadosScreen          from './src/components/home/resultados.jsx'
import ExamenMedicoScreen        from './src/components/menu/examenmedico.jsx'
import EscuelasManejoScreen      from './src/components/menu/escuelasmanejo.jsx'

import { useEffect } from 'react';

const StackBegin           = createNativeStackNavigator()
const StackHome            = createNativeStackNavigator()

/**retira la barra por defecto */
const navOptionHandler = () => ({
  headerShown: false
})

function HomeStack (){

    return(
        <StackHome.Navigator initialRouteName='SeleccionScreen'>
            <StackHome.Screen name='SeleccionScreen'           component={SeleccionScreen}           options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaUnoPreguntas'     component={CategoriaUnoPreguntas}     options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaUnoRespuestas'    component={CategoriaUnoRespuestas}    options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaDosPreguntas'     component={CategoriaDosPreguntas}     options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaDosRespuestas'    component={CategoriaDosRespuestas}    options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaTresPreguntas'    component={CategoriaTresPreguntas}    options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaTresRespuestas'   component={CategoriaTresRespuestas}   options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaCuatroPreguntas'  component={CategoriaCuatroPreguntas}  options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaCuatroRespuestas' component={CategoriaCuatroRespuestas} options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaCincoPreguntas'   component={CategoriaCincoPreguntas}   options={navOptionHandler}/>
            <StackHome.Screen name='CategoriaCincoRespuestas'  component={CategoriaCincoRespuestas}  options={navOptionHandler}/>
            <StackHome.Screen name='ResultadosScreen'          component={ResultadosScreen}          options={navOptionHandler}/>
            <StackHome.Screen name='ExamenMedicoScreen'        component={ExamenMedicoScreen}        options={navOptionHandler}/>
            <StackHome.Screen name='EscuelasManejoScreen'      component={EscuelasManejoScreen}      options={navOptionHandler}/>
            <StackHome.Screen name='ActualizarDatosScreen'     component={ActualizarDatosScreen}     options={navOptionHandler}/>
        </StackHome.Navigator>
    )
}

export default function App() {

    return (  
        <Provider store={store}>
            <NavigationContainer>
                <StackBegin.Navigator initialRouteName='LoadingScreen'>
                    <StackBegin.Screen name='LoadingScreen'          component={LoadingScreen}          options={navOptionHandler}/>
                    <StackBegin.Screen name='LoginScreen'            component={LoginScreen}            options={navOptionHandler}/>
                    <StackBegin.Screen name='RegistroScreen'         component={RegistroScreen}         options={navOptionHandler}/>
                    <StackBegin.Screen name='InicioSesionScreen'     component={InicioSesionScreen}     options={navOptionHandler}/>
                    <StackBegin.Screen name='RestablecerPassScreen'  component={RestablecerPassScreen}  options={navOptionHandler}/>
                    <StackBegin.Screen name='ActualizarPassScreen'   component={ActualizarPassScreen}   options={navOptionHandler}/>
                    <StackBegin.Screen name='HomeStack'              component={HomeStack}              options={navOptionHandler}/>
                </StackBegin.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
