import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {questionsdata} from '../../redux/slice/questionsdata';
import { questionsConstants } from '../../redux/uri/questions-constants';
import { set_id_question, set_answer_list, set_menu_open, set_number_question } from '../../redux/actions/dataactions';
import Menu from './menu/menu';

export default function AnswerScreen ({navigation}) {

    const isFocused = useIsFocused()
    const dispatch = useDispatch()

    const [answers, setAnswers] = useState(0)
    const [number_rights, setNumberRights] = useState (0)

    const {number_category, 
           answer_1, answer_2, answer_3, answer_4, answer_5, answer_6, answer_7, answer_8, answer_9, 
           answer_11, answer_12, answer_13, answer_14, answer_15, answer_16, answer_17, answer_18, 
           answer_19, answer_10, answer_21, answer_22, answer_23, answer_24, answer_25, 
           answer_26, answer_27, answer_28, answer_29, answer_30, answer_31,
           answer_32, answer_33, answer_34, answer_35, answer_36, answer_37, 
           answer_38, answer_39, answer_40, answer_20} = useSelector (({datareducer}) => datareducer)

    const {menu_open} = useSelector(({datareducer}) => datareducer)
    const {get_questions} = useSelector(({questions}) => questions)
    const begin = useSelector(({begin}) => begin)

    const [boton, setBoton] = useState (false)

    /**Function that calculates (calculate_results() function)
     * percentage and 
     * number of correct results
    */
    useEffect (() => {
      if (isFocused){
        calculate_results()
      }
    }, [isFocused])

    /**You get the answers (watch_answers() function) 
     * and go to the first question 
     * with your correct or incorrect answer
    */
    useEffect (() => {
      if (get_questions && get_questions.questions && boton === true){
        dispatch (questionsdata(questionsConstants({}, true, 0, 0).get_questions))
        dispatch (set_id_question(get_questions.questions[0].id))
        dispatch (set_number_question(1))
        navigation.navigate(number_category === '1' ? 'B2aCategoryAnswers' : number_category === '2' ? 'B2bCategoryAnswers' :
                            number_category === '3' ? 'A2aCategoryAnswers' : number_category === '4' ? 'A3aCategoryAnswers' : 
                            'A3bCategoryAnswers')
      }
    }, [get_questions, boton])

    const calculate_results = () => {
      let listas = [{'right_answer': answer_1.right_answer, 'usuario': answer_1.user}, {'right_answer': answer_2.right_answer, 'usuario': answer_2.user}, {'right_answer': answer_3.right_answer, 'usuario': answer_3.user},
                    {'right_answer': answer_4.right_answer, 'usuario': answer_4.user}, {'right_answer': answer_5.right_answer, 'usuario': answer_5.user}, {'right_answer': answer_6.right_answer, 'usuario': answer_6.user},
                    {'right_answer': answer_7.right_answer, 'usuario': answer_7.user},{'right_answer': answer_8.right_answer, 'usuario': answer_8.user},
                    {'right_answer': answer_9.right_answer, 'usuario': answer_9.user},{'right_answer': answer_10.right_answer, 'usuario': answer_10.user},
                    {'right_answer': answer_11.right_answer, 'usuario': answer_11.user}, {'right_answer': answer_12.right_answer, 'usuario': answer_12.user}, {'right_answer': answer_13.right_answer, 'usuario': answer_13.user},
                    {'right_answer': answer_14.right_answer, 'usuario': answer_14.user}, {'right_answer': answer_15.right_answer, 'usuario': answer_15.user}, {'right_answer': answer_16.right_answer, 'usuario': answer_16.user},
                    {'right_answer': answer_17.right_answer, 'usuario': answer_17.user},{'right_answer': answer_18.right_answer, 'usuario': answer_18.user},{'right_answer': answer_19.right_answer, 'usuario': answer_19.user},
                    {'right_answer': answer_20.right_answer, 'usuario': answer_20.user},
                    {'right_answer': answer_21.right_answer, 'usuario': answer_21.user}, {'right_answer': answer_22.right_answer, 'usuario': answer_22.user}, {'right_answer': answer_23.right_answer, 'usuario': answer_23.user},
                    {'right_answer': answer_24.right_answer, 'usuario': answer_24.user}, {'right_answer': answer_25.right_answer, 'usuario': answer_25.user}, {'right_answer': answer_26.right_answer, 'usuario': answer_26.user},
                    {'right_answer': answer_27.right_answer, 'usuario': answer_27.user},{'right_answer': answer_28.right_answer, 'usuario': answer_28.user},{'right_answer': answer_29.right_answer, 'usuario': answer_29.user},
                    {'right_answer': answer_30.right_answer, 'usuario': answer_30.user},
                    {'right_answer': answer_31.right_answer, 'usuario': answer_31.user}, {'right_answer': answer_32.right_answer, 'usuario': answer_32.user}, {'right_answer': answer_40.right_answer, 'usuario': answer_40.user},
                    {'right_answer': answer_33.right_answer, 'usuario': answer_33.user}, {'right_answer': answer_34.right_answer, 'usuario': answer_34.user}, {'right_answer': answer_35.right_answer, 'usuario': answer_35.user},
                    {'right_answer': answer_36.right_answer, 'usuario': answer_36.user},{'right_answer': answer_37.right_answer, 'usuario': answer_37.user},{'right_answer': answer_38.right_answer, 'usuario': answer_38.user},
                    {'right_answer': answer_39.right_answer, 'usuario': answer_39.user}]

      let suma = 0
      listas.map ((dato, index) => {
        suma += dato.right_answer ? 1 : 0
      })
      dispatch (set_answer_list (listas))
      setNumberRights(suma)
      setAnswers(parseFloat(suma / 40) * 100)
    }

    const watch_answers = () => {
      setBoton (true)
      dispatch (questionsdata(questionsConstants({}, false, 0, 
                number_category === '1' ? 'b2a_category' : number_category === '2' ? 'b2b_category' :
                number_category === '3' ? 'a2a_category' : number_category === '4' ? 'a3a_category' :
                'a3b_category').get_questions))
    }

    /**Function that allows you to repeat the exam  */
    const repeat_examen = () => {
        dispatch(set_number_question(1))
        navigation.navigate ('SelectionScreen')
    }

    return (
        <GestureHandlerRootView style={styles.container}>
           
            <ImageBackground style={styles.fondo} source={answers < 90 ? ICON.RESPUESTAS_BARRA_SUPERIOR_RED : ICON.RESULTADOS_FONDO_TOP_GREEN}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={[styles.menu]} onPress={() => dispatch(set_menu_open(true))}>
                      <Image source={answers < 90 ? ICON.PANTALLA_SELECCION_MENU : ICON.RESULTADOS_MENU_GREEN}/>
                  </TouchableOpacity>
                  
                  <View style={styles.container_titulo} >
                    <Text style={styles.texto_selecciona}>Simulacro</Text>
                    <Text style={styles.texto_categoria}>
                        {number_category === '1' ? 'CATEGORÍA 1 - B2A' : number_category === '2' ? 'CATEGORÍA 2 - B2B' :
                         number_category === '3' ? 'CATEGORÍA 3 - A2A' : number_category === '4' ? 'CATEGORÍA 4 - A3A' :
                                                 'CATEGORÍA 5 - A3B'}</Text>
                  </View>
                  
                  <TouchableOpacity style={[styles.avatar]} onPress={() => navigation.navigate ('UpdateDataScreen')}>
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
              <Image source={answers < 90 ? ICON.RESULTADOS_RED : ICON.RESULTADOS_GREEN} style={styles.imagen_resultados}/>
              <Text style={styles.texto_reultados}>{answers}%</Text>
            </View>

            <Text style={[styles.texto_nro_respuestas, {color: answers < 90 ? '#FF0000' : '#04C200'}]}>{number_rights} RESPUESTAS CORRECTAS</Text>
            <Text style={[styles.texto_objetivo]}>{answers < 90 ? `¡No pares hasta lograrlo!` : `¡Has logrado el objetivo!`}</Text>
            
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

            <Text style={[styles.texto_proceso, {color: answers < 90 ? '#FF0000' : '#04C200' }]}>
              Conoce todo sobre el proceso para obtener tu licencia de conducir</Text>
            
            
           <View style={styles.container_botones}>
                <TouchableOpacity style={[styles.boton_respuestas, {backgroundColor: answers < 90 ? '#FF0000' : '#04C200' }]} onPress={() => watch_answers()}>
                  <Text style={styles.texto_respuestas}>Ver respuestas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boton_finalizar, {backgroundColor: 'black', marginBottom: 0}]} onPress={() => repeat_examen()}>
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