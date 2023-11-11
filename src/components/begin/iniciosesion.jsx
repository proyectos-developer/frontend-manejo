import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import { useDispatch, useSelector } from 'react-redux';
import {begindata} from '../../redux/slice/begindata';
import {beginConstants} from '../../redux/uri/begin-constants'

export default function InicioSesionScreen ({navigation}) {

    const dispatch = useDispatch()

    const [usuario, setUsuario] = useState ('')
    const [password, setPassword] = useState ('')

    const {login_user} = useSelector(({begin}) => begin)
    
    useEffect (() => {
      if (login_user && login_user.access_token){
        console.log ('login_user', login_user.access_token)
        //navigation.navigate ('ActualizarDatosScreen')
      }
    }, [login_user])

    const iniciar_sesion = () => {
      if (usuario === '' || password === ''){

      } else{
        const data_user = {
          email: usuario,
          password: password
        }
        dispatch (begindata(beginConstants(data_user, false, 0).login_user))
      }
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.PANTALLA_SESION_FONDO_ROJO}/>
            <Image source={ICON.LOGO_WHITE} style={styles.logo}/>
            
            <Image source={ICON.PANTALLA_SESION_AVATAR_WHITE_107} style={[styles.avatar]}/>

            <TextInput
              style={[styles.input, {top: 412}]}
              value={usuario}
              onChange={(usuario) => setUsuario(usuario)}
              placeholder='Usuario'
              placeholderTextColor='#ffffff'
              onSubmitEditing={() => text_contrasenia.focus()}
              returnKeyType='next'
              autoCapitalize='none'/>

            <TextInput
              style={[styles.input, {top: 476}]}
              value={password}
              onChange={(password) => setPassword(password)}
              placeholder='Contraseña'
              placeholderTextColor='#ffffff'
              ref={(input) => { text_contrasenia = input }}
              onSubmitEditing={() => iniciar_sesion()}
              returnKeyType='done'
              autoCapitalize='none'/>
            
            <TouchableOpacity style={[styles.boton, {top: 566}]} onPress={() => iniciar_sesion()}>
                <Image source={ICON.PANTALLA_SESION_BOTON_INGRESAR} style={{width: '100%', height: 58}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.texto_olvidaste]} onPress={() => navigation.navigate('RestablecerPassScreen')}>
                <Image source={ICON.PANTALLA_SESION_TEXTO_OLVIDASTE_CONTRASEÑA} style={{width: '100%', height: 14}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.texto_crea]} onPress={() => navigation.navigate('RegistroScreen')}>
                <Image source={ICON.PANTALLA_SESION_TEXTO_CREA_CUENTA} style={{width: '100%', height: 13}}/>
            </TouchableOpacity>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fondo: {
    flex: 1,
    width: '100%'
  },
  logo: {
    width: 159,
    height: 52,
    position: 'absolute',
    top: 92,
    alignContent: 'center'
  },
  avatar: {
    width: 107,
    height: 107,
    position: 'absolute',
    top: 244,
    alignContent: 'center'
  },
  input: {
    position: 'absolute',
    width: 284,
    height: 43, 
    alignContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 26,
    color: 'white'
  },
  boton: {
    position: 'absolute',
    width: 270,
    height: 58,
    alignContent: 'center'
  },
  texto_olvidaste: {
    position: 'absolute',
    width: 231,
    height: 14,
    alignContent: 'center',
    top: 647
  },
  texto_crea: {
    position: 'absolute',
    width: 234,
    height: 13,
    alignContent: 'center',
    top: 745
  },
})