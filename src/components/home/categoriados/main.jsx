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

export default function CatgoriaDosStack (){
    
    return(
        <StackCategoriaUno.Navigator initialRouteName='PreguntaCatDosUnoScreen'>

            <StackCategoriaUno.Screen name='PreguntaCatDosUnoScreen'    component={PreguntaUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosDosScreen'    component={PreguntaDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTresScreen'   component={PreguntaTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosCuatroScreen' component={PreguntaCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosCincoScreen'  component={PreguntaCincoScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosSeisScreen'   component={PreguntaSeisScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatDosSieteScreen'  component={PreguntaSieteScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosOchoScreen'   component={PreguntaOchoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosNueveScreen'  component={PreguntaNueveScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosDiezScreen'   component={PreguntaDiezScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosOnceScreen'   component={PreguntaOnceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosDoceScreen'   component={PreguntaDoceScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatDosTreceScreen'      component={PreguntaTreceScreen}       options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosCatorceScreen'    component={PreguntaCatorceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosQuinceScreen'     component={PreguntaQuinceScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosDiezySeisScreen'  component={PreguntaDiezySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosDiezySieteScreen' component={PreguntaDiezySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosDiezyOchoScreen'  component={PreguntaDiezyOchoScreen}   options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatDosDiezyNueveScreen'    component={PreguntaDiezyNueveScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteScreen'        component={PreguntaVeinteScreen}          options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteyUnoScreen'    component={PreguntaVeinteyUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteyDosScreen'    component={PreguntaVeinteyDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteyTresScreen'   component={PreguntaVeinteyTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteyCuatroScreen' component={PreguntaVeinteyCuatroScreen}   options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteyCincoScreen' component={PreguntaVeinteyCincoScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteySeisScreen'  component={PreguntaVeinteySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteySieteScreen' component={PreguntaVeinteySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteyOchoScreen'  component={PreguntaVeinteyOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosVeinteyNueveScreen' component={PreguntaVeinteyNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintaScreen'      component={PreguntaTreintaScreen}       options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintayUnoScreen'    component={PreguntaTreintayUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintayDosScreen'    component={PreguntaTreintayDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintayTresScreen'   component={PreguntaTreintayTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintayCuatroScreen' component={PreguntaTreintayCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintayCincoScreen'  component={PreguntaTreintayCincoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintaySeisScreen'   component={PreguntaTreintaySeisScreen}      options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintaySieteScreen' component={PreguntaTreintaySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintayOchoScreen'  component={PreguntaTreintayOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosTreintayNueveScreen' component={PreguntaTreintayNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatDosCuarentaScreen'      component={PreguntaCuarentaScreen}       options={navOptionHandler}/>
            
            {/**<StackCategoriaUno.Screen name='ResultadosScreen'            component={ResultadosScreen}             options={navOptionHandler}/>**/}
        </StackCategoriaUno.Navigator>
    )
}