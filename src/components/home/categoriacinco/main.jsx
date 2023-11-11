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

export default function CatgoriaCincoStack (){
    
    return(
        <StackCategoriaUno.Navigator initialRouteName='PreguntaCatCincoUnoScreen'>
            
            <StackCategoriaUno.Screen name='PreguntaCatCincoUnoScreen'    component={PreguntaUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoDosScreen'    component={PreguntaDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTresScreen'   component={PreguntaTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoCuatroScreen' component={PreguntaCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoCincoScreen'  component={PreguntaCincoScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoSeisScreen'   component={PreguntaSeisScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatCincoSieteScreen'  component={PreguntaSieteScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoOchoScreen'   component={PreguntaOchoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoNueveScreen'  component={PreguntaNueveScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoDiezScreen'   component={PreguntaDiezScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoOnceScreen'   component={PreguntaOnceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoDoceScreen'   component={PreguntaDoceScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatCincoTreceScreen'      component={PreguntaTreceScreen}       options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoCatorceScreen'    component={PreguntaCatorceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoQuinceScreen'     component={PreguntaQuinceScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoDiezySeisScreen'  component={PreguntaDiezySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoDiezySieteScreen' component={PreguntaDiezySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoDiezyOchoScreen'  component={PreguntaDiezyOchoScreen}   options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatCincoDiezyNueveScreen'    component={PreguntaDiezyNueveScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteScreen'        component={PreguntaVeinteScreen}          options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteyUnoScreen'    component={PreguntaVeinteyUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteyDosScreen'    component={PreguntaVeinteyDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteyTresScreen'   component={PreguntaVeinteyTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteyCuatroScreen' component={PreguntaVeinteyCuatroScreen}   options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteyCincoScreen' component={PreguntaVeinteyCincoScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteySeisScreen'  component={PreguntaVeinteySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteySieteScreen' component={PreguntaVeinteySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteyOchoScreen'  component={PreguntaVeinteyOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoVeinteyNueveScreen' component={PreguntaVeinteyNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintaScreen'      component={PreguntaTreintaScreen}       options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintayUnoScreen'    component={PreguntaTreintayUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintayDosScreen'    component={PreguntaTreintayDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintayTresScreen'   component={PreguntaTreintayTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintayCuatroScreen' component={PreguntaTreintayCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintayCincoScreen'  component={PreguntaTreintayCincoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintaySeisScreen'   component={PreguntaTreintaySeisScreen}      options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintaySieteScreen' component={PreguntaTreintaySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintayOchoScreen'  component={PreguntaTreintayOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoTreintayNueveScreen' component={PreguntaTreintayNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatCincoCuarentaScreen'      component={PreguntaCuarentaScreen}       options={navOptionHandler}/>
            
            {/**<StackCategoriaUno.Screen name='ResultadosScreen'            component={ResultadosScreen}             options={navOptionHandler}/>**/}
        </StackCategoriaUno.Navigator>
    )
}