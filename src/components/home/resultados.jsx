import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {preguntasdata} from '../../redux/slice/preguntasdata';
import { preguntasConstants } from '../../redux/uri/preguntas-constants';
import { set_id_pregunta, set_lista_respuestas, set_menu_open, set_nro_pregunta } from '../../redux/actions/dataactions';
import Menu from './menu/menu';

export default function ResultadosScreen ({navigation}) {

    const isFocused = useIsFocused()
    const dispatch = useDispatch()

    const [resultados, setResultados] = useState(0)
    const [nro_correctas, setNroCorrectas] = useState (0)
    const [lista_respuestas, setListaRespuestas] = useState ([])

    const {nro_categoria, 
           respuesta_uno, respuesta_dos, respuesta_tres, respuesta_cuatro, respuesta_cinco, respuesta_seis, respuesta_siete, respuesta_ocho, respuesta_nueve, 
           respuesta_diez, respuesta_once, respuesta_doce, respuesta_trece, respuesta_catorce, respuesta_quince, respuesta_diezyseis, respuesta_diezysiete, 
           respuesta_diezyocho, respuesta_diezynueve, respuesta_veinte, respuesta_veinteyuno, respuesta_veinteydos, respuesta_veinteytres, respuesta_veinteycuatro, 
           respuesta_veinteycinco, respuesta_veinteyseis, respuesta_veinteysiete, respuesta_veinteyocho, respuesta_veinteynueve, respuesta_treinta,
           respuesta_treintayuno, respuesta_treintaydos, respuesta_treintaytres, respuesta_treintaycuatro, respuesta_treintaycinco, respuesta_treintayseis, 
           respuesta_treintaysiete, respuesta_treintayocho, respuesta_treintaynueve, respuesta_cuarenta} = useSelector (({datareducer}) => datareducer)

    const {menu_open} = useSelector(({datareducer}) => datareducer)
    const {get_preguntas} = useSelector(({preguntas}) => preguntas)
    const begin = useSelector(({begin}) => begin)

    const [boton, setBoton] = useState (false)

    useEffect (() => {
      if (isFocused){
        calcular_resultados()
      }
    }, [isFocused])

    useEffect (() => {
      if (get_preguntas && get_preguntas.preguntas && boton === true){
        dispatch (preguntasdata(preguntasConstants({}, true, 0, 0).get_preguntas))
        dispatch (set_id_pregunta(get_preguntas.preguntas[0].id))
        dispatch (set_nro_pregunta(1))
        navigation.navigate(nro_categoria === '1' ? 'CategoriaUnoRespuestas' : nro_categoria === '2' ? 'CategoriaDosRespuestas' :
                            nro_categoria === '3' ? 'CategoriaTresRespuestas' : nro_categoria === '4' ? 'CategoriaCuatroRespuestas' : 
                            'CategoriaCincoRespuestas')
      }
    }, [get_preguntas, boton])

    const calcular_resultados = () => {
      let listas = [{'correcta': respuesta_uno.correcta, 'usuario': respuesta_uno.usuario}, {'correcta': respuesta_dos.correcta, 'usuario': respuesta_dos.usuario}, {'correcta': respuesta_tres.correcta, 'usuario': respuesta_tres.usuario},
                    {'correcta': respuesta_cuatro.correcta, 'usuario': respuesta_cuatro.usuario}, {'correcta': respuesta_cinco.correcta, 'usuario': respuesta_cinco.usuario}, {'correcta': respuesta_seis.correcta, 'usuario': respuesta_seis.usuario},
                    {'correcta': respuesta_siete.correcta, 'usuario': respuesta_siete.usuario},{'correcta': respuesta_ocho.correcta, 'usuario': respuesta_ocho.usuario},
                    {'correcta': respuesta_nueve.correcta, 'usuario': respuesta_nueve.usuario},{'correcta': respuesta_diez.correcta, 'usuario': respuesta_diez.usuario},
                    {'correcta': respuesta_once.correcta, 'usuario': respuesta_once.usuario}, {'correcta': respuesta_doce.correcta, 'usuario': respuesta_doce.usuario}, {'correcta': respuesta_trece.correcta, 'usuario': respuesta_trece.usuario},
                    {'correcta': respuesta_catorce.correcta, 'usuario': respuesta_catorce.usuario}, {'correcta': respuesta_quince.correcta, 'usuario': respuesta_quince.usuario}, {'correcta': respuesta_diezyseis.correcta, 'usuario': respuesta_diezyseis.usuario},
                    {'correcta': respuesta_diezysiete.correcta, 'usuario': respuesta_diezysiete.usuario},{'correcta': respuesta_diezyocho.correcta, 'usuario': respuesta_diezyocho.usuario},{'correcta': respuesta_diezynueve.correcta, 'usuario': respuesta_diezynueve.usuario},{'correcta': respuesta_veinte.correcta, 'usuario': respuesta_veinte.usuario},
                    {'correcta': respuesta_veinteyuno.correcta, 'usuario': respuesta_veinteyuno.usuario}, {'correcta': respuesta_veinteydos.correcta, 'usuario': respuesta_veinteydos.usuario}, {'correcta': respuesta_veinteytres.correcta, 'usuario': respuesta_veinteytres.usuario},
                    {'correcta': respuesta_veinteycuatro.correcta, 'usuario': respuesta_veinteycuatro.usuario}, {'correcta': respuesta_veinteycinco.correcta, 'usuario': respuesta_veinteycinco.usuario}, {'correcta': respuesta_veinteyseis.correcta, 'usuario': respuesta_veinteyseis.usuario},
                    {'correcta': respuesta_veinteysiete.correcta, 'usuario': respuesta_veinteysiete.usuario},{'correcta': respuesta_veinteyocho.correcta, 'usuario': respuesta_veinteyocho.usuario},{'correcta': respuesta_veinteynueve.correcta, 'usuario': respuesta_veinteynueve.usuario},{'correcta': respuesta_treinta.correcta, 'usuario': respuesta_treinta.usuario},
                    {'correcta': respuesta_treintayuno.correcta, 'usuario': respuesta_treintayuno.usuario}, {'correcta': respuesta_treintaydos.correcta, 'usuario': respuesta_treintaydos.usuario}, {'correcta': respuesta_treintaytres.correcta, 'usuario': respuesta_treintaytres.usuario},
                    {'correcta': respuesta_treintaycuatro.correcta, 'usuario': respuesta_treintaycuatro.usuario}, {'correcta': respuesta_treintaycinco.correcta, 'usuario': respuesta_treintaycinco.usuario}, {'correcta': respuesta_treintayseis.correcta, 'usuario': respuesta_treintayseis.usuario},
                    {'correcta': respuesta_treintaysiete.correcta, 'usuario': respuesta_treintaysiete.usuario},{'correcta': respuesta_treintayocho.correcta, 'usuario': respuesta_treintayocho.usuario},{'correcta': respuesta_treintaynueve.correcta, 'usuario': respuesta_treintaynueve.usuario},{'correcta': respuesta_cuarenta.correcta, 'usuario': respuesta_cuarenta.usuario}]

      let suma = 0
      listas.map ((dato, index) => {
        suma += dato.correcta ? 1 : 0
      })
      dispatch (set_lista_respuestas (listas))
      setNroCorrectas(suma)
      setResultados(parseFloat(suma / 40) * 100)
    }

    const ver_respuetas = () => {
      setBoton (true)
      dispatch (preguntasdata(preguntasConstants({}, false, 0, 
                nro_categoria === '1' ? 'preguntas_categoria_uno' : nro_categoria === '2' ? 'pregntas_categoria_dos' :
                nro_categoria === '3' ? 'preguntas_categoria_tres' : nro_categoria === '4' ? 'preguntas_categoria_cuatro' :
                'preguntas_categoria_cinco').get_preguntas))
    }

    const repetir_examen = () => {
        dispatch(set_nro_pregunta(1))
        navigation.navigate ('SeleccionScreen')
        /**dispatch(preguntasdata(preguntasConstants({}, false, id_inicial, 
            nro_categoria === '1' ? 'preguntas_categoria_uno' : nro_categoria === '2' ? 'preguntas_categoria_dos' :
            nro_categoria === '3' ? 'preguntas_categoria_tres' : nro_categoria === '4' ? 'preguntas_categoria_cuatro' : 
            'preguntas_categoria_cuatro').get_pregunta))**/
    }

    return (
        <GestureHandlerRootView style={styles.container}>
           
            <ImageBackground style={styles.fondo} source={resultados < 90 ? ICON.RESPUESTAS_BARRA_SUPERIOR_RED : ICON.RESULTADOS_FONDO_TOP_GREEN}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={[styles.menu]} onPress={() => dispatch(set_menu_open(true))}>
                      <Image source={resultados < 90 ? ICON.PANTALLA_SELECCION_MENU : ICON.RESULTADOS_MENU_GREEN}/>
                  </TouchableOpacity>
                  
                  <View style={styles.container_titulo} >
                    <Text style={styles.texto_selecciona}>Simulacro</Text>
                    <Text style={styles.texto_categoria}>
                        {nro_categoria === '1' ? 'CATEGORÍA 1 - B2A' : nro_categoria === '2' ? 'CATEGORÍA 2 - B2B' :
                         nro_categoria === '3' ? 'CATEGORÍA 3 - A2A' : nro_categoria === '4' ? 'CATEGORÍA 4 - A3A' :
                                                 'CATEGORÍA 5 - A3B'}</Text>
                  </View>
                  
                  <TouchableOpacity style={[styles.avatar]} onPress={() => navigation.navigate ('ActualizarDatosScreen')}>
                      <Image source={ICON.PANTALLA_SELECCION_AVATAR}/>
                  </TouchableOpacity>
                </View>
                  
                <View style={styles.container_texto_resultados}>
                  <Text style={styles.texto_fueron}>Estos fueron tus</Text>
                  <Text style={styles.texto_resultados}>RESULTADOS</Text>
                </View>

                {
                  menu_open ? (
                    <Menu navigation={navigation}/>
                  ) : null
                }
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
            
            
           <View style={styles.container_botones}>
                <TouchableOpacity style={[styles.boton_respuestas, {backgroundColor: resultados < 90 ? '#FF0000' : '#04C200' }]} onPress={() => ver_respuetas()}>
                  <Text style={styles.texto_respuestas}>Ver respuestas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boton_finalizar, {backgroundColor: 'black', marginBottom: 0}]} onPress={() => repetir_examen()}>
                    <Text style={styles.texto_finalizar}>Repetir examen</Text>
                </TouchableOpacity>
            </View>
            {
              begin.loading ? ( 
                <View style={styles.view_loading}>
                  <Image source={ICON.LOADING_SCREEN} style={styles.icono_loading}/>
                </View>
              ) : null
            }
            
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
    marginBottom: 15
  },
  boton_respuestas: {
    width: 270,
    height: 58,
    justifyContent: 'center',
    borderRadius: 40,
    marginBottom: 11
  },
  boton_finalizar: {
      borderRadius: 40,
      width: 270,
      height: 48
  },
  texto_finalizar: {
      fontSize: 25,
      lineHeight: 48,
      color: 'white',
      fontFamily: 'Nunito-Bold',
      textAlign: 'center'
  },
  container_botones: {
    width: '100%',
    alignItems: 'center',
    height: 48
  },
  texto_respuestas: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    lineHeight: 58,
    textAlign: 'center',
    color: 'white'
  },
  view_loading: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  icono_loading: {
    width: '100%'
  }
})