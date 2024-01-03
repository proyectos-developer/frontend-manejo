import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import Menu from './menu/menu';
import { useDispatch, useSelector } from 'react-redux';
import { set_id_question, set_menu_open, set_number_category, set_number_question} from '../../redux/actions/dataactions';
import {questionsdata} from '../../redux/slice/questionsdata';
import { questionsConstants } from '../../redux/uri/questions-constants';
import { useIsFocused } from '@react-navigation/native';

export default function SelectionScreen ({navigation}) {

    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const [number_category, setNumberCategory] = useState (0)

    const {menu_open} = useSelector(({datareducer}) => datareducer)
    const begin = useSelector(({begin}) => begin)
    const {get_questions} = useSelector(({questions}) => questions)

    /**
     * Set the question number to zero
    * */
    useEffect (() => {
      if(isFocused){
        dispatch (set_id_question(0))
        dispatch ((set_number_question(1)))
      }
    }, [isFocused])

    /**
     * We get category questions: 
     * questions_category () function
     * */
    useEffect (() => {
      if (get_questions && get_questions.questions){
        dispatch (questionsdata(questionsConstants({}, true, 0, 0).get_questions))
        dispatch (set_id_question(get_questions.questions[0].id))
        navigation.navigate(number_category === '1' ? 'B2aCategoryQuestions' : number_category === '2' ? 'B2bCategoryQuestions' :
                            number_category === '3' ? 'A2aCategoryQuestions' : number_category === '4' ? 'A3aCategoryQuestions' : 
                            'A3bCategoryQuestions')
      }
    }, [get_questions])

    const questions_category = (category) => {
      setNumberCategory (category)
      dispatch (set_number_category(category))
      dispatch (questionsdata(questionsConstants({}, false, 0, 
                category === '1' ? 'b2a_category' : category === '2' ? 'b2b_category' :
                category === '3' ? 'a2a_category' : category === '4' ? 'a3a_category' :
                'a3b_category').get_questions))
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.PANTALLA_SELECCION_FONDO}>
            
                <TouchableOpacity style={[styles.menu]} onPress={() => dispatch(set_menu_open(true))}>
                    <Image source={ICON.PANTALLA_SELECCION_MENU}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.avatar]} onPress={() => navigation.navigate ('UpdateDataScreen')}>
                    <Image source={ICON.PANTALLA_SELECCION_AVATAR}/>
                </TouchableOpacity>
                
                <Text style={styles.texto_selecciona}>Selecciona tu</Text>
                <Text style={styles.texto_categoria}>CATEGORÍA</Text>

                {
                  menu_open ? (
                    <Menu navigation={navigation}/>
                  ) : null
                }
            </ImageBackground>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 246}]} onPress={() => questions_category('1')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: '#252525', lineHeight: 22}}>CATEGORÍA 1</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: '#252525', lineHeight: 19}}>Moto Lineal (B2A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_UNO} style={{width: 68, height: 40, top: 20, right: 8, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ff0000', top: 353}]} onPress={() => questions_category('2')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: 'white', lineHeight: 22}}>CATEGORÍA 2</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: 'white', lineHeight: 19}}>Mototaxi (B2B)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_DOS} style={{width: 86, height: 52, top: 14, right: 31, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 460}]}onPress={() => questions_category('3')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: '#252525', lineHeight: 22}}>CATEGORÍA 3</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: '#252525', lineHeight: 19}}>Camioneta (A2A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_TRES} style={{width: 90, height: 36, top: 23, right: 30, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ff0000', top: 563}]} onPress={() => questions_category('4')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: 'white', lineHeight: 22}}>CATEGORÍA 4</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: 'white', lineHeight: 19}}>Buses (A3A)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_CUATRO} style={{width: 104, height: 46, top: 18, right: 23, position: 'absolute'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.boton_seleccion, {backgroundColor: '#ededed', top: 668}]} onPress={() => questions_category ('5')}>
              <View style={styles.seleccion_texto}>
                <Text style={{fontFamily: 'Nunito-ExtraBold', fontSize: 20, marginBottom: 6, color: '#252525', lineHeight: 22}}>CATEGORÍA 5</Text>
                <Text style={{fontFamily: 'Nunito-Regular', fontSize: 15, color: '#252525', lineHeight: 19}}>Camiones (A3B)</Text>
              </View>
              <Image source={ICON.PANTALLA_SELECCION_ICONO_CINCO} style={{width: 108, height: 46, top: 16, right: 20, position: 'absolute'}}/>
            </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  fondo: {
    height: 201,
    width: '100%',
    position: 'absolute',
    top: 0
  },
  menu: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 25,
    left: 15
  },
  avatar: {
      width: 80,
      height: 80,
      position: 'absolute',
      top: 25,
      right: 0
  },
  input: {
    position: 'absolute',
    width: 284,
    height: 43, 
    alignContent: 'center',
    borderColor: '#252525',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 26,
    color: '#252525'
  },
  boton: {
    position: 'absolute',
    width: 270,
    height: 58,
    alignContent: 'center'
  },
  texto_categoria: {
    position: 'absolute',
    left: 31,
    top: 116,
    fontFamily: 'Nunito-Black', fontSize: 40, color: 'white', lineHeight: 55
  },
  texto_selecciona: {
    position: 'absolute',
    left: 31,
    top: 92,
    fontFamily: 'Nunito-Medium', fontSize: 25, color: 'white', lineHeight: 34
  },
  boton_seleccion: {
    width: 331,
    height: 81,
    left: 15,
    position: 'absolute',
    borderRadius: 20
  }, 
  seleccion_texto: {
    position: 'absolute',
    height: 'auto', 
    top: 18, 
    left: 25
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