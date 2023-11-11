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

export default function CatgoriaTresStack (){
    
    return(
        <StackCategoriaUno.Navigator initialRouteName='PreguntaCatTresUnoScreen'>
            
            <StackCategoriaUno.Screen name='PreguntaCatTresUnoScreen'    component={PreguntaUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresDosScreen'    component={PreguntaDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTresScreen'   component={PreguntaTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresCuatroScreen' component={PreguntaCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresCincoScreen'  component={PreguntaCincoScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresSeisScreen'   component={PreguntaSeisScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatTresSieteScreen'  component={PreguntaSieteScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresOchoScreen'   component={PreguntaOchoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresNueveScreen'  component={PreguntaNueveScreen}    options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresDiezScreen'   component={PreguntaDiezScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresOnceScreen'   component={PreguntaOnceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresDoceScreen'   component={PreguntaDoceScreen}     options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatTresTreceScreen'      component={PreguntaTreceScreen}       options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresCatorceScreen'    component={PreguntaCatorceScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresQuinceScreen'     component={PreguntaQuinceScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresDiezySeisScreen'  component={PreguntaDiezySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresDiezySieteScreen' component={PreguntaDiezySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresDiezyOchoScreen'  component={PreguntaDiezyOchoScreen}   options={navOptionHandler}/>

            <StackCategoriaUno.Screen name='PreguntaCatTresDiezyNueveScreen'    component={PreguntaDiezyNueveScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteScreen'        component={PreguntaVeinteScreen}          options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteyUnoScreen'    component={PreguntaVeinteyUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteyDosScreen'    component={PreguntaVeinteyDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteyTresScreen'   component={PreguntaVeinteyTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteyCuatroScreen' component={PreguntaVeinteyCuatroScreen}   options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteyCincoScreen' component={PreguntaVeinteyCincoScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteySeisScreen'  component={PreguntaVeinteySeisScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteySieteScreen' component={PreguntaVeinteySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteyOchoScreen'  component={PreguntaVeinteyOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresVeinteyNueveScreen' component={PreguntaVeinteyNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintaScreen'      component={PreguntaTreintaScreen}       options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintayUnoScreen'    component={PreguntaTreintayUnoScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintayDosScreen'    component={PreguntaTreintayDosScreen}      options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintayTresScreen'   component={PreguntaTreintayTresScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintayCuatroScreen' component={PreguntaTreintayCuatroScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintayCincoScreen'  component={PreguntaTreintayCincoScreen}     options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintaySeisScreen'   component={PreguntaTreintaySeisScreen}      options={navOptionHandler}/>
            
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintaySieteScreen' component={PreguntaTreintaySieteScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintayOchoScreen'  component={PreguntaTreintayOchoScreen}   options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresTreintayNueveScreen' component={PreguntaTreintayNueveScreen}  options={navOptionHandler}/>
            <StackCategoriaUno.Screen name='PreguntaCatTresCuarentaScreen'      component={PreguntaCuarentaScreen}       options={navOptionHandler}/>
            
            {/**<StackCategoriaUno.Screen name='ResultadosScreen'            component={ResultadosScreen}             options={navOptionHandler}/>**/}
        </StackCategoriaUno.Navigator>
    )
}