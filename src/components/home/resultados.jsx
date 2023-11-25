import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {preguntasdata} from '../../redux/slice/preguntasdata';
import { preguntasConstants } from '../../redux/uri/preguntas-constants';
import { set_id_pregunta, set_nro_pregunta } from '../../redux/actions/dataactions';

export default function ResultadosScreen ({navigation}) {

    const isFocused = useIsFocused()
    const dispatch = useDispatch()

    const [resultados, setResultados] = useState(0)
    const [nro_correctas, setNroCorrectas] = useState (0)

    const {nro_categoria, 
      respuesta_uno, respuesta_dos, respuesta_tres, respuesta_cuatro, respuesta_cinco, respuesta_seis, respuesta_siete, respuesta_ocho, respuesta_nueve, respuesta_diez,
      respuesta_once, respuesta_doce, respuesta_trece, respuesta_catorce, respuesta_quince, respuesta_diezyseis, respuesta_diezysiete, respuesta_diezyocho, respuesta_diezynueve, respuesta_veinte, 
      respuesta_veinteyuno, respuesta_veinteydos, respuesta_veinteytres, respuesta_veinteycuatro, respuesta_veinteycinco, respuesta_veinteyseis, respuesta_veinteysiete, respuesta_veinteyocho, respuesta_veinteynueve, respuesta_treinta,
      respuesta_treintayuno, respuesta_treintaydos, respuesta_treintaytres, respuesta_treintaycuatro, respuesta_treintaycinco, respuesta_treintayseis, respuesta_treintaysiete, respuesta_treintayocho, respuesta_treintaynueve, respuesta_cuarenta} = useSelector (({datareducer}) => datareducer)

    const {get_preguntas} = useSelector(({preguntas}) => preguntas)
    const [boton, setBoton] = useState (false)

    useEffect (() => {
      if (isFocused){
        calcular_resultados()
      }
    }, [isFocused])

    useEffect (() => {
      if (get_preguntas && get_preguntas.preguntas && boton === true){
        console.log ('get', get_preguntas)
        dispatch (preguntasdata(preguntasConstants({}, true, 0, 0).get_preguntas))
        dispatch (set_id_pregunta(get_preguntas.preguntas[0].id))
        dispatch (set_nro_pregunta(1))
        navigation.navigate(nro_categoria === '1' ? 'CategoriaUnoRespuestas' : nro_categoria === '2' ? 'CategoriaDosRespuestas' :
                            nro_categoria === '3' ? 'CategoriaTresStack' : nro_categoria === '4' ? 'CategoriaCuatroStack' : 
                            'CategoriaCincoStack')
      }
    }, [get_preguntas, boton])

    const calcular_resultados = () => {
      const resultado = parseFloat(respuesta_uno.correcta ? 1 : 0) + parseFloat(respuesta_dos.correcta ? 1 : 0) + parseFloat(respuesta_tres.correcta ? 1 : 0) + 
       parseFloat(respuesta_cuatro.correcta ? 1 : 0) + parseFloat(respuesta_cinco.correcta ? 1 : 0) + parseFloat(respuesta_seis.correcta ? 1 : 0) + 
       parseFloat(respuesta_siete.correcta ? 1 : 0) + parseFloat(respuesta_ocho.correcta ? 1 : 0) + parseFloat(respuesta_nueve.correcta ? 1 : 0) + 
       parseFloat(respuesta_diez.correcta ? 1 : 0) + parseFloat(respuesta_once.correcta ? 1 : 0) + parseFloat(respuesta_doce.correcta ? 1 : 0) + 
       parseFloat(respuesta_trece.correcta ? 1 : 0) + parseFloat(respuesta_catorce.correcta ? 1 : 0) + parseFloat(respuesta_quince.correcta ? 1 : 0) + 
       parseFloat(respuesta_diezyseis.correcta ? 1 : 0) + parseFloat(respuesta_diezysiete.correcta ? 1 : 0) + parseFloat(respuesta_diezyocho.correcta ? 1 : 0) +
       parseFloat(respuesta_diezynueve.correcta ? 1 : 0) + parseFloat(respuesta_veinte.correcta ? 1 : 0) + parseFloat(respuesta_veinteyuno.correcta ? 1 : 0) + 
       parseFloat(respuesta_veinteydos.correcta ? 1 : 0) + parseFloat(respuesta_veinteytres.correcta ? 1 : 0) + parseFloat(respuesta_veinteycuatro.correcta ? 1 : 0) + 
       parseFloat(respuesta_veinteycinco.correcta ? 1 : 0) + parseFloat(respuesta_veinteyseis.correcta ? 1 : 0) + parseFloat(respuesta_veinteysiete.correcta ? 1 : 0) +
       parseFloat(respuesta_veinteyocho.correcta ? 1 : 0) + parseFloat(respuesta_veinteynueve.correcta ? 1 : 0) + parseFloat(respuesta_treinta.correcta ? 1 : 0) +
       parseFloat(respuesta_treintayuno.correcta ? 1 : 0) + parseFloat(respuesta_treintaydos.correcta ? 1 : 0) + parseFloat(respuesta_treintaytres.correcta ? 1 : 0) + 
       parseFloat(respuesta_treintaycuatro.correcta ? 1 : 0) + parseFloat(respuesta_treintaycinco.correcta ? 1 : 0) + parseFloat(respuesta_treintayseis.correcta ? 1 : 0)
       + parseFloat(respuesta_treintaysiete.correcta ? 1 : 0) + parseFloat(respuesta_treintayocho.correcta ? 1 : 0) + parseFloat(respuesta_treintaynueve.correcta ? 1 : 0)
       + parseFloat(respuesta_cuarenta.correcta ? 1 : 0)

      setNroCorrectas(resultado)
      setResultados(parseFloat(resultado / 40) * 100)
    }

    const ver_respuetas = () => {
      setBoton (true)
      dispatch (preguntasdata(preguntasConstants({}, false, 0, 
                nro_categoria === '1' ? 'preguntas_categoria_uno' : nro_categoria === '2' ? 'pregntas_categoria_dos' :
                nro_categoria === '3' ? 'preguntas_categoria_tres' : nro_categoria === '4' ? 'preguntas_categoria_cuatro' :
                'preguntas_categoria_cinco').get_preguntas))
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={resultados < 90 ? ICON.RESPUESTAS_BARRA_SUPERIOR_RED : ICON.RESULTADOS_FONDO_TOP_GREEN}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={[styles.menu]}>
                      <Image source={resultados < 90 ? ICON.PANTALLA_SELECCION_MENU : ICON.RESULTADOS_MENU_GREEN}/>
                  </TouchableOpacity>
                  
                  <View style={styles.container_titulo}>
                    <Text style={styles.texto_selecciona}>Simulacro</Text>
                    <Text style={styles.texto_categoria}>{nro_categoria === '1' ? 'CATEGORÍA 1 - B2A' : nro_categoria === '2' ? 'CATEGORÍA 2 - B2B' :
                nro_categoria === '3' ? 'CATEGORÍA 3 - A2A' : nro_categoria === '4' ? 'CATEGORÍA 4 - A3A' :
                'CATEGORÍA 5 - A3B'}</Text>
                  </View>
                  
                  <TouchableOpacity style={[styles.avatar]}>
                      <Image source={ICON.PANTALLA_SELECCION_AVATAR}/>
                  </TouchableOpacity>
                </View>
                  
                <View style={styles.container_texto_resultados}>
                  <Text style={styles.texto_fueron}>Estos fueron tus</Text>
                  <Text style={styles.texto_resultados}>RESULTADOS</Text>
                </View>
            </ImageBackground>
            
            <View style={[styles.view_resultados]}>
              <Image source={resultados < 90 ? ICON.RESULTADOS_RED : ICON.RESULTADOS_GREEN} style={styles.imagen_resultados}/>
              <Text style={styles.texto_reultados}>{resultados}%</Text>
            </View>

            <Text style={[styles.texto_nro_respuestas, {color: resultados < 90 ? '#FF0000' : '#04C200'}]}>{nro_correctas} RESPUESTAS CORRECTAS</Text>
            <Text style={[styles.texto_objetivo]}>{resultados < 90 ? `¡No pares hasta lograrlo!` : `¡Has logrado el objetivo!`}</Text>
            
            <TouchableOpacity style={[styles.boton_seleccion, {marginBottom: 22}]}>
              <Image source={ICON.RESULTADOS_EXAMEN_MEDICO} style={styles.resultados_icono}/>
              <View style={styles.view_seleccion}>
                <Text style={styles.texto_seleccion}>Conoce aquí donde puedes obtener tu</Text>
                <Text style={styles.titulo_seleccion}>CERTIFICADO MÉDICO</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {marginBottom: 15}]}>
              <Image source={ICON.RESULTADOS_ESCUAELA_MANEJO} style={styles.resultados_icono}/>
              <View style={styles.view_seleccion}>
                <Text style={styles.texto_seleccion}>Conoce aquí donde puedes tomar</Text>
                <Text style={styles.titulo_seleccion}>CLASES DE MANEJO</Text>
              </View>
            </TouchableOpacity>
            <Text style={[styles.texto_proceso, {color: resultados < 90 ? '#FF0000' : '#04C200' }]}>
              Conoce todo sobre el proceso para obtener tu licencia de conducir</Text>
            <TouchableOpacity style={[styles.boton_respuestas, {backgroundColor: resultados < 90 ? '#FF0000' : '#04C200' }]} onPress={() => ver_respuetas()}>
              <Text style={styles.texto_respuestas}>Ver respuestas</Text>
            </TouchableOpacity>
            
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  fondo: {
    height: 201,
    width: '100%',
    paddingTop: 25
  },
  menu: {
    width: 80,
    height: 80,
    marginLeft: 15
  },
  avatar: {
      width: 80,
      height: 80,
      right: 0
  },
  container_texto_resultados: {
    width: '100%'
  },
  texto_fueron: {
      textAlign: 'center',
      fontFamily: 'Nunito-Medium', fontSize: 25, lineHeight: 34, color: 'white'
  },
  texto_resultados: {
    textAlign: 'center',
    fontFamily: 'Nunito-Black', fontSize: 40, lineHeight: 42, color: 'white'
  },
  boton: {
    position: 'absolute',
    width: 270,
    height: 58,
    alignContent: 'center'
  },
  container_titulo:{
    width: 159,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 24
  },
  texto_categoria: {
    fontFamily: 'Nunito-Black', fontSize: 16, color: 'white', lineHeight: 22,
    textAlign: 'center'
  },
  texto_selecciona: {
    fontFamily: 'Nunito-Medium', fontSize: 15, color: 'white', lineHeight: 20,
    textAlign: 'center'
  },
  view_resultados: {
    alignSelf: 'center',
    marginTop: 29, 
    marginBottom: 23
  },
  imagen_resultados: {
    width: 164,
    height: 164
  },
  texto_reultados: {
    position: 'absolute',
    alignSelf: 'center',
    lineHeight: 164,
    fontSize: 35,
    fontFamily: 'Nunito-Black'
  },
  texto_nro_respuestas:{
    lineHeight: 30,
    fontSize: 22,
    fontFamily: 'Nunito-Black'
  },
  texto_objetivo: {
    lineHeight: 25,
    fontSize: 18,
    color: '#252525',
    fontFamily: 'Nunito-Medium',
    marginBottom: 20
  },
  boton_seleccion: {
    width: 331,
    height: 69,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 14,
    paddingRight: 24,
    marginLeft: 0,
    borderRadius: 15,
    backgroundColor: '#ededed',
    flexDirection: 'row'
  }, 
  resultados_icono: {
    width: 65,
    height: 65,
    marginRight: 4
  },
  view_seleccion: {
    width: 225,
    justifyContent: 'center'
  },
  texto_seleccion:{
    textAlign: 'center',
    fontSize: 13,
    color: '#252525',
    fontFamily: 'Nunito-Regular',
    lineHeight: 18
  },
  titulo_seleccion:{
    textAlign: 'center',
    fontSize: 17,
    color: '#252525',
    fontFamily: 'Nunito-Black',
    lineHeight: 23
  },
  texto_proceso: {
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center', 
    fontFamily: 'Nunito-Bold',
    marginBottom: 22
  },
  boton_respuestas: {
    width: 270,
    height: 58,
    justifyContent: 'center',
    borderRadius: 40
  },
  texto_respuestas: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    lineHeight: 58,
    textAlign: 'center',
    color: 'white'
  }
})