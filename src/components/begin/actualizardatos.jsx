import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {begindata} from '../../redux/slice/begindata';
import { beginConstants } from '../../redux/uri/begin-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ActualizarDatosScreen ({navigation}) {

    const isFocused = useIsFocused ()
    const dispatch = useDispatch()

    const [nombres_apellidos, setNombresApellidos] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmar_password, setConfirmarPassword] = useState ('')

    const {get_user} = useSelector(({begin}) => begin)
    const begin = useSelector (({begin}) => begin)

    useEffect (() => {
      if (isFocused){
        obtener_token ()
      }
    }, [isFocused])

    useEffect(() => {
      if (get_user){
        setNombresApellidos(get_user.name)
        setCorreo(get_user.email)
      }
    }, [get_user])

    const obtener_token = async () => {
      try {
        const token = await AsyncStorage.getItem ('token')
        dispatch (begindata(beginConstants({}, false, 0, token).get_user))
      } catch (error) {
        
      }
    }

    const actualizar_datos = () => {
      navigation.navigate ('LoginScreen')
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.FONDO_TOP}>
              <Image source={ICON.LOGO_WHITE_191} style={styles.logo}/>
            </ImageBackground>

            <ScrollView style={styles.container_datos}>
              <Image source={ICON.AVATAR_WHITE_199} style={[styles.avatar]}/>

              <TextInput
                style={[[styles.input, {marginBottom: 22}]]}
                value={nombres_apellidos}
                onChange={(nombres_apellidos) => setNombresApellidos(nombres_apellidos)}
                placeholder='Nombres y Apellidos'
                placeholderTextColor='#ffffff'
                onSubmitEditing={() => text_correo.focus()}
                returnKeyType='next'/>

              <TextInput
                style={[[styles.input, {marginBottom: 22}]]}
                value={correo}
                onChange={(correo) => setCorreo(correo)}
                placeholder='Correo electrónico'
                placeholderTextColor='#ffffff'
                ref={(input) => { text_correo = input }}
                onSubmitEditing={() => text_contraseña.focus()}
                returnKeyType='next'
                autoCapitalize='none'/>

              <TextInput
                style={[[styles.input, {marginBottom: 22}]]}
                value={password}
                onChange={(password) => setPassword(password)}
                placeholder='Contraseña '
                placeholderTextColor='#ffffff'
                ref={(input) => { text_contraseña = input }}
                onSubmitEditing={() => text_confirmar.focus()}
                returnKeyType='next'
                autoCapitalize='none'/>

              <TextInput
                style={[styles.input, {marginBottom: 42}]}
                value={confirmar_password}
                onChange={(confirmar_password) => setConfirmarPassword(confirmar_password)}
                placeholder='Confirmar contraseña '
                placeholderTextColor='#ffffff'
                ref={(input) => { text_contraseña = input }}
                onSubmitEditing={() => actualizar_datos()}
                returnKeyType='done'
                autoCapitalize='none'/>
              
              <TouchableOpacity style={[styles.boton]} onPress={() => actualizar_datos()}>
                  <Text style={styles.texto_actualizar}>Actualizar datos</Text>
              </TouchableOpacity>
            </ScrollView>
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
    height: 371,
    width: '100%',
  },
  logo: {
    width: 191,
    height: 191,
    alignContent: 'center',
    alignSelf: 'center'
  },
  container_datos: {
    position: 'absolute',
    top: 211,
    backgroundColor: '#ff0000',
    width: 314,
    height: 554,
    borderRadius: 40
  },
  avatar: {
    width: 199,
    height: 199,
    alignContent: 'center',
    alignSelf: 'center'
  },
  input: {
    width: 284,
    height: 43, 
    alignContent: 'center',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 26,
    color: '#ffffff',
    alignSelf: 'center'
  },
  boton: {
    width: 270,
    height: 58,
    alignContent: 'center',
    backgroundColor: '#252525',
    alignSelf: 'center',
    borderRadius: 40
  },
  texto_actualizar: {
    fontSize: 25,
    lineHeight: 58,
    fontFamily: 'Nunito-Bold',
    color: 'white',
    textAlign: 'center'
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