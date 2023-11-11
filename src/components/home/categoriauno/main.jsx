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

export default function CatgoriaUnoStack (){
    
    return(
        <StackCategoriaUno.Navigator initialRouteName='PreguntaCatUnoUnoScreen'>
            
            <StackCategoriaUno.Screen name='PreguntaCatUnoUnoScreen'    component={PreguntaUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoDosScreen'    component={PreguntaDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTresScreen'   component={PreguntaTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoCuatroScreen' component={PreguntaCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoCincoScreen'  component={PreguntaCincoScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoSeisScreen'   component={PreguntaSeisScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatUnoSieteScreen'  component={PreguntaSieteScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoOchoScreen'   component={PreguntaOchoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoNueveScreen'  component={PreguntaNueveScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoDiezScreen'   component={PreguntaDiezScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoOnceScreen'   component={PreguntaOnceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoDoceScreen'   component={PreguntaDoceScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatUnoTreceScreen'      component={PreguntaTreceScreen}       options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoCatorceScreen'    component={PreguntaCatorceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoQuinceScreen'     component={PreguntaQuinceScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoDiezySeisScreen'  component={PreguntaDiezySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoDiezySieteScreen' component={PreguntaDiezySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoDiezyOchoScreen'  component={PreguntaDiezyOchoScreen}   options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatUnoDiezyNueveScreen'    component={PreguntaDiezyNueveScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteScreen'        component={PreguntaVeinteScreen}          options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteyUnoScreen'    component={PreguntaVeinteyUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteyDosScreen'    component={PreguntaVeinteyDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteyTresScreen'   component={PreguntaVeinteyTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteyCuatroScreen' component={PreguntaVeinteyCuatroScreen}   options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteyCincoScreen' component={PreguntaVeinteyCincoScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteySeisScreen'  component={PreguntaVeinteySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteySieteScreen' component={PreguntaVeinteySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteyOchoScreen'  component={PreguntaVeinteyOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoVeinteyNueveScreen' component={PreguntaVeinteyNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintaScreen'      component={PreguntaTreintaScreen}       options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintayUnoScreen'    component={PreguntaTreintayUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintayDosScreen'    component={PreguntaTreintayDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintayTresScreen'   component={PreguntaTreintayTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintayCuatroScreen' component={PreguntaTreintayCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintayCincoScreen'  component={PreguntaTreintayCincoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintaySeisScreen'   component={PreguntaTreintaySeisScreen}      options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintaySieteScreen' component={PreguntaTreintaySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintayOchoScreen'  component={PreguntaTreintayOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoTreintayNueveScreen' component={PreguntaTreintayNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatUnoCuarentaScreen'      component={PreguntaCuarentaScreen}       options={navOptionHandler}/>
            
            {/**<StackCategoriaUno.Screen name='ResultadosScreen'            component={ResultadosScreen}             options={navOptionHandler}/>**/}
        </StackCategoriaUno.Navigator>
    )
}