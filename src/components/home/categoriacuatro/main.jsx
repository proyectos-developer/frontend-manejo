import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PreguntaUnoScreen     from './preguntauno.jsx'
import PreguntaDosScreen     from './preguntados.jsx'
import PreguntaTresScreen    from './preguntatres.jsx'
import PreguntaCuatroScreen  from './preguntacuatro.jsx'
import PreguntaCincoScreen   from './preguntacinco.jsx'
import PreguntaSeisScreen    from './preguntaseis.jsx'

import PreguntaSieteScreen   from './preguntasiete.jsx'
import PreguntaOchoScreen    from './preguntaocho.jsx'
import PreguntaNueveScreen   from './preguntanueve.jsx'
import PreguntaDiezScreen    from './preguntadiez.jsx'
import PreguntaOnceScreen    from './preguntaonce.jsx'
import PreguntaDoceScreen    from './preguntadoce.jsx'

import PreguntaTreceScreen   from './preguntatrece.jsx'
import PreguntaCatorceScreen from './preguntacatorce.jsx'
import PreguntaQuinceScreen  from './preguntaquince.jsx'
import PreguntaDiezySeisScreen  from './preguntadiezyseis.jsx'
import PreguntaDiezySieteScreen from './preguntadiezysiete.jsx'
import PreguntaDiezyOchoScreen  from './preguntadiezyocho.jsx'

import PreguntaDiezyNueveScreen    from './preguntadiezynueve.jsx'
import PreguntaVeinteScreen        from './preguntaveinte.jsx'
import PreguntaVeinteyUnoScreen    from './preguntaveinteyuno.jsx'
import PreguntaVeinteyDosScreen    from './preguntaveinteydos.jsx'
import PreguntaVeinteyTresScreen   from './preguntaveinteytres.jsx'
import PreguntaVeinteyCuatroScreen from './preguntaveinteycuatro.jsx'

import PreguntaVeinteyCincoScreen  from './preguntaveinteycinco.jsx'
import PreguntaVeinteySeisScreen   from './preguntaveinteyseis.jsx'
import PreguntaVeinteySieteScreen  from './preguntaveinteysiete.jsx'
import PreguntaVeinteyOchoScreen   from './preguntaveinteyocho.jsx'
import PreguntaVeinteyNueveScreen  from './preguntaveinteynueve.jsx'
import PreguntaTreintaScreen       from './preguntatreinta.jsx'

import PreguntaTreintayUnoScreen    from './preguntatreintayuno.jsx'
import PreguntaTreintayDosScreen    from './preguntatreintaydos.jsx'
import PreguntaTreintayTresScreen   from './preguntatreintaytres.jsx'
import PreguntaTreintayCuatroScreen from './preguntatreintaycuatro.jsx'
import PreguntaTreintayCincoScreen  from './preguntatreintaycinco.jsx'
import PreguntaTreintaySeisScreen   from './preguntatreintayseis.jsx'

import PreguntaTreintaySieteScreen  from './preguntatreintaysiete.jsx'
import PreguntaTreintayOchoScreen   from './preguntatreintayocho.jsx'
import PreguntaTreintayNueveScreen  from './preguntatreintaynueve.jsx'
import PreguntaCuarentaScreen       from './preguntacuarenta.jsx'

//import ResultadosScreen             from '../resultados.jsx'

const StackCategoriaUno    = createNativeStackNavigator()

const navOptionHandler = () => ({
    headerShown: false
  })

export default function CatgoriaCuatroStack (){
    
    return(
        <StackCategoriaUno.Navigator initialRouteName='PreguntaCatCuatroUnoScreen'>

            <StackCategoriaUno.Screen name='PreguntaCatCuatroUnoScreen'    component={PreguntaUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroDosScreen'    component={PreguntaDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTresScreen'   component={PreguntaTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroCuatroScreen' component={PreguntaCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroCincoScreen'  component={PreguntaCincoScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroSeisScreen'   component={PreguntaSeisScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatCuatroSieteScreen'  component={PreguntaSieteScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroOchoScreen'   component={PreguntaOchoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroNueveScreen'  component={PreguntaNueveScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroDiezScreen'   component={PreguntaDiezScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroOnceScreen'   component={PreguntaOnceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroDoceScreen'   component={PreguntaDoceScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreceScreen'      component={PreguntaTreceScreen}       options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroCatorceScreen'    component={PreguntaCatorceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroQuinceScreen'     component={PreguntaQuinceScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroDiezySeisScreen'  component={PreguntaDiezySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroDiezySieteScreen' component={PreguntaDiezySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroDiezyOchoScreen'  component={PreguntaDiezyOchoScreen}   options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatCuatroDiezyNueveScreen'    component={PreguntaDiezyNueveScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteScreen'        component={PreguntaVeinteScreen}          options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteyUnoScreen'    component={PreguntaVeinteyUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteyDosScreen'    component={PreguntaVeinteyDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteyTresScreen'   component={PreguntaVeinteyTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteyCuatroScreen' component={PreguntaVeinteyCuatroScreen}   options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteyCincoScreen' component={PreguntaVeinteyCincoScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteySeisScreen'  component={PreguntaVeinteySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteySieteScreen' component={PreguntaVeinteySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteyOchoScreen'  component={PreguntaVeinteyOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroVeinteyNueveScreen' component={PreguntaVeinteyNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintaScreen'      component={PreguntaTreintaScreen}       options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintayUnoScreen'    component={PreguntaTreintayUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintayDosScreen'    component={PreguntaTreintayDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintayTresScreen'   component={PreguntaTreintayTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintayCuatroScreen' component={PreguntaTreintayCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintayCincoScreen'  component={PreguntaTreintayCincoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintaySeisScreen'   component={PreguntaTreintaySeisScreen}      options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintaySieteScreen' component={PreguntaTreintaySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintayOchoScreen'  component={PreguntaTreintayOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroTreintayNueveScreen' component={PreguntaTreintayNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCuatroCuarentaScreen'      component={PreguntaCuarentaScreen}       options={navOptionHandler}/>
            
            {/**<StackCategoriaUno.Screen name='ResultadosScreen'            component={ResultadosScreen}             options={navOptionHandler}/>**/}
        </StackCategoriaUno.Navigator>
    )
}