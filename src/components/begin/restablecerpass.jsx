import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'

export default function RestablecerPassScreen ({navigation}) {

  const [nombres_apellidos, setNombresApellidos] = useState ('')
  const [correo, setCorreo] = useState ('')
  const [password, setPassword] = useState ('')
  const [confirmar_password, setConfirmarPassword] = useState ('')

    const enviar_correo = () => {
      navigation.navigate ('ActualizarPassScreen')
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.fondo} source={ICON.FONDO_TOP}/>
            <Image source={ICON.LOGO_WHITE} style={styles.logo}/>
            
            <Image source={ICON.PANTALLA_RESTABLECER_CONTRASEÑA_TITULO} style={styles.texto_titulo}/>
            
            <Image source={ICON.PANTALLA_RESTABLECER_CONTRASEÑA_DESCRIPCION} style={styles.texto_descripcion}/>
            
            <Image source={ICON.PANTALLA_RESTABLECER_ENVIAR_CORREO} style={styles.texto_correo}/>

            <TextInput
              style={[styles.input, {top: 563}]}
              value={confirmar_password}
              onChange={(confirmar_password) => setConfirmarPassword(confirmar_password)}
              placeholder='Introducir email'
              placeholderTextColor='#252525'
              ref={(input) => { text_correo = input }}
              onSubmitEditing={() => enviar_correo()}
              returnKeyType='done'
              autoCapitalize='none'/>
            
            <TouchableOpacity style={[styles.boton, {top: 667}]} onPress={() => enviar_correo()}>
                <Image source={ICON.PANTALLA_RESTABLECER_CONTRASEÑA_BOTON} style={{width: '100%', height: 58}}/>
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
  texto_titulo: {
    position: 'absolute',
    width: 295,
    height: 20,
    alignContent: 'center',
    top: 420
  },
  texto_descripcion: {
    position: 'absolute',
    width: 295,
    height: 28,
    alignContent: 'center',
    top: 462
  },
  texto_correo: {
    position: 'absolute',
    width: 151,
    height: 15,
    left: 53,
    top: 532
  }
})