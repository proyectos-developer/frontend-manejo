import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Touchable } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux'
import Menu from '../home/menu/menu'
import { ICON } from '../../assets/constants/images'
import { set_menu_open } from '../../redux/actions/dataactions';
import { useIsFocused } from '@react-navigation/native';
import {escuelasdata} from '../../redux/slice/escuelasdata';
import {escuelasConstants} from '../../redux/uri/escuelas-constants'

export default function EscuelasManejoScreen ({navigation}) {

    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const [lista_escuelas, setListaEscuelas] = useState([])

    const [distrito, setDistrito] = useState ('')
    const {menu_open} = useSelector(({datareducer}) => datareducer)
    const {get_escuelas_manejo} = useSelector (({escuelas}) => escuelas)
    const begin = useSelector (({begin}) => begin)

    useEffect(() => {
      if (isFocused){
        dispatch (escuelasdata(escuelasConstants(false).get_escuelas_manejo))
      }
    }, [isFocused])

    useEffect (() => {
      if (get_escuelas_manejo && get_escuelas_manejo.escuelas_manejo){
        console.log ('get', get_escuelas_manejo)
        setListaEscuelas(get_escuelas_manejo.escuelas_manejo)
      }
    }, [get_escuelas_manejo])

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.PANTALLA_SELECCION_FONDO}>
            
                <TouchableOpacity style={[styles.menu]} onPress={() => dispatch(set_menu_open(true))}>
                    <Image source={ICON.PANTALLA_SELECCION_MENU}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.avatar]} onPress={() => navigation.navigate ('ActualizarDatosScreen')}>
                    <Image source={ICON.PANTALLA_SELECCION_AVATAR}/>
                </TouchableOpacity>
                
                <Text style={styles.texto_selecciona}>REVISA DÓNDE TOMAR</Text>
                <Text style={styles.texto_categoria}>CLASES DE MANEJO</Text>

                {
                    menu_open ? (
                        <Menu navigation={navigation}/>
                    ) : null
                }
            </ImageBackground>
              
            <View style={styles.container_input}>
                <TextInput
                    keyboardType='default'
                    style={[styles.input]}
                    value={distrito}
                    onChangeText={(distrito) => setDistrito(distrito)}
                    placeholder='Ingresa tu distrito'
                    placeholderTextColor='#252525'
                    returnKeyType='done'/>

                <TouchableOpacity style={styles.view_search}>
                    <Image source={ICON.MEDICO_ICONO_LUPA} style={styles.icono_search}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.texto_proceso}>Conoce todo sobre el proceso para obtener tu licencia de conducir</Text>

            <View style={[styles.container_filas, {marginBottom: 18}]}>
                <View style={[styles.container_clinica, {marginRight: 11}]}>
                    <View style={styles.container_superior}>
                        <Text style={styles.texto_clinica}>EMPRESA 1</Text>
                        
                    </View>
                    <View style={styles.container_inferior}>
                        <View style={styles.container_ubicacion}>
                            <Image source={ICON.MEDICO_ICONO_UBICACION} style={styles.icono_ubicacion}/>
                            <Text style={styles.texto_ubicacion}>Jesús María</Text>
                        </View>
                        <Text style={styles.texto_precio}>Examenes desde S/.12.00</Text>
                        <TouchableOpacity style={styles.boton_telefono}>
                            <Image source={ICON.MEDICO_ICONO_TELEFONO} style={styles.icono_boton}/>
                            <Text style={styles.texto_boton}>987 654 321</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={[styles.container_clinica, {marginLeft: 11}]}>
                    <View style={styles.container_superior}>
                        <Text style={styles.texto_clinica}>EMPRESA 2</Text>

                    </View>
                    <View style={styles.container_inferior}>
                        <View style={styles.container_ubicacion}>
                            <Image source={ICON.MEDICO_ICONO_UBICACION} style={styles.icono_ubicacion}/>
                            <Text style={styles.texto_ubicacion}>Jesús María</Text>
                        </View>
                        <Text style={styles.texto_precio}>Examenes desde S/.12.00</Text>
                        <TouchableOpacity style={styles.boton_telefono}>
                            <Image source={ICON.MEDICO_ICONO_TELEFONO} style={styles.icono_boton}/>
                            <Text style={styles.texto_boton}>987 654 321</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={[styles.container_filas]}>
                <View style={[styles.container_clinica, {marginRight: 11}]}>
                    <View style={styles.container_superior}>
                        <Text style={styles.texto_clinica}>EMPRESA 3</Text>
                        
                    </View>
                    <View style={styles.container_inferior}>
                        <View style={styles.container_ubicacion}>
                            <Image source={ICON.MEDICO_ICONO_UBICACION} style={styles.icono_ubicacion}/>
                            <Text style={styles.texto_ubicacion}>Jesús María</Text>
                        </View>
                        <Text style={styles.texto_precio}>Examenes desde S/.12.00</Text>
                        <TouchableOpacity style={styles.boton_telefono}>
                            <Image source={ICON.MEDICO_ICONO_TELEFONO} style={styles.icono_boton}/>
                            <Text style={styles.texto_boton}>987 654 321</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={[styles.container_clinica, {marginLeft: 11}]}>
                    <View style={styles.container_superior}>
                        <Text style={styles.texto_clinica}>EMPRESA 4</Text>

                    </View>
                    <View style={styles.container_inferior}>
                        <View style={styles.container_ubicacion}>
                            <Image source={ICON.MEDICO_ICONO_UBICACION} style={styles.icono_ubicacion}/>
                            <Text style={styles.texto_ubicacion}>Jesús María</Text>
                        </View>
                        <Text style={styles.texto_precio}>Examenes desde S/.12.00</Text>
                        <TouchableOpacity style={styles.boton_telefono}>
                            <Image source={ICON.MEDICO_ICONO_TELEFONO} style={styles.icono_boton}/>
                            <Text style={styles.texto_boton}>987 654 321</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    alignItems: 'center', 
  },
  fondo: {
    height: 201,
    width: '100%',
    marginBottom: 30
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
      right: 15
  },
  texto_categoria: {
    position: 'absolute',
    left: 31,
    top: 116,
    fontFamily: 'Nunito-Black', fontSize: 30, color: 'white', lineHeight: 55
  },
  texto_selecciona: {
    position: 'absolute',
    left: 31,
    top: 92,
    fontFamily: 'Nunito-Medium', fontSize: 18, color: 'white', lineHeight: 34
  },
  container_input : {
    borderColor: '#252525',
    borderWidth: 2,
    width: 330,
    height: 40,
    borderRadius: 35,
    backgroundColor: '#ededed',
    flexDirection: 'row',
    marginBottom: 34
  },
  input :{
    width: 261,
    height: 36,
    paddingLeft: 21,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    fontFamily: 'Nunito-Regular'
  },
  view_search:{
    backgroundColor: '#252525',
    width: 65,
    height: 36,
    borderRadius: 35,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  icono_search: {
    width: 35,
    height: 35,
    marginLeft: 15,
    marginRight: 15
  },
  container_filas: {
    width: 308,
    height: 178,
    flexDirection: 'row'
  },
  container_clinica: {
    width: 143,
    height: 178,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#ededed'
  },
  container_superior: {
    width: 139,
    height: 112,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white'
  },
  container_inferior: {
    width: 139,
    height: 62,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: '#ededed'
  },
  texto_clinica: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Nunito-Black',
    textAlign: 'center',
    marginTop: 19
  },
  container_ubicacion:{
    flexDirection: 'row',
    alignSelf: 'center',
    height: 14,
    width: 48,
    marginTop: 5
  },
  icono_ubicacion: {
    width: 14,
    height: 14,
    marginRight: 3
  },
  texto_ubicacion: {
    fontSize: 8,
    lineHeight: 14,
    fontFamily: 'Nunito-Regular',
    color: '#252525'
  },
  texto_precio: {
    fontSize: 10,
    lineHeight: 12,
    marginBottom: 4,
    fontFamily: 'Nunito-ExtraBold',
    textAlign: 'center',
    color: '#252525'
  },
  boton_telefono :{
    backgroundColor: '#ff0000',
    width: 99,
    height: 19,
    flexDirection: 'row',
    borderRadius: 25,
    alignSelf: 'center',
    paddingTop: 2.5,
    paddingBottom: 2.5,
    justifyContent: 'center'
  },
  icono_boton: {
    width: 14,
    height: 14,
    marginRight: 6
  },
  texto_boton:{
    fontSize: 12,
    lineHeight: 14,
    color: 'white',
    fontFamily: 'Nunito-Black'
  },
  texto_proceso: {
    color: '#ff0000',
    fontSize: 11,
    lineHeight: 15,
    fontFamily: 'Nunito-Bold',
    marginBottom: 39
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