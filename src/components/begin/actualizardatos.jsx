import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'

export default function ActualizarDatosScreen ({navigation}) {

    const [nombres_apellidos, setNombresApellidos] = useState ('')
    const [correo, setCorreo] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmar_password, setConfirmarPassword] = useState ('')

    const actualizar_datos = () => {
      navigation.navigate ('LoginScreen')
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.FONDO_TOP}/>
            <Image source={ICON.LOGO_WHITE} style={styles.logo}/>

            <View style={styles.container_datos}/>
            
            <Image source={ICON.PANTALLA_ACTUALIZAR_DATOS_AVATAR_WHITE_107} style={[styles.avatar]}/>

            <TextInput
              style={[styles.input, {top: 390}]}
              value={nombres_apellidos}
              onChange={(nombres_apellidos) => setNombresApellidos(nombres_apellidos)}
              placeholder='Nombres y Apellidos'
              placeholderTextColor='#ffffff'
              onSubmitEditing={() => text_correo.focus()}
              returnKeyType='next'/>

              <TextInput
                style={[styles.input, {top: 454}]}
                value={correo}
                onChange={(correo) => setCorreo(correo)}
                placeholder='Correo electrónico'
                placeholderTextColor='#ffffff'
                ref={(input) => { text_correo = input }}
                onSubmitEditing={() => text_contraseña.focus()}
                returnKeyType='next'
                autoCapitalize='none'/>

              <TextInput
                style={[styles.input, {top: 518}]}
                value={password}
                onChange={(password) => setPassword(password)}
                placeholder='Contraseña '
                placeholderTextColor='#ffffff'
                ref={(input) => { text_contraseña = input }}
                onSubmitEditing={() => text_confirmar.focus()}
                returnKeyType='next'
                autoCapitalize='none'/>

              <TextInput
                style={[styles.input, {top: 583}]}
                value={confirmar_password}
                onChange={(confirmar_password) => setConfirmarPassword(confirmar_password)}
                placeholder='Confirmar contraseña '
                placeholderTextColor='#ffffff'
                ref={(input) => { text_contraseña = input }}
                onSubmitEditing={() => actualizar_datos()}
                returnKeyType='done'
                autoCapitalize='none'/>
            
            <TouchableOpacity style={[styles.boton, {top: 667}]} onPress={() => actualizar_datos()}>
                <Image source={ICON.PANTALLA_ACTUALIZAR_DATOS_BOTON} style={{width: '100%', height: 58}}/>
            </TouchableOpacity>
            
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
    height: 371,
    width: '100%',
    position: 'absolute',
    top: 0
  },
  logo: {
    width: 159,
    height: 52,
    position: 'absolute',
    top: 92,
    alignContent: 'center'
  },
  container_datos: {
    position: 'absolute',
    top: 211,
    backgroundColor: '#FF0000',
    width: 314,
    height: 554,
    borderRadius: 40
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
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 26,
    color: '#ffffff'
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