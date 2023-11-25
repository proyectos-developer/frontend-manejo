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
            <ImageBackground style={styles.fondo} source={ICON.FONDO_TOP}>
              <Image source={ICON.LOGO_WHITE_235} style={styles.logo}/>
            </ImageBackground>

            <View style={[styles.view_container]}>
              <Text style={[styles.texto_titulo]}>Reestablecer contraseña</Text>
              <Text style={[styles.texto_descripcion]}>Introduce el email asociado a la cuenta y te enviaremos{`\n`}
              las instrucciones para reestablecer tu contraseña</Text>
              
              <Text style={[styles.texto_correo]}>Dirección de email</Text>

              <TextInput
                style={[styles.input]}
                value={confirmar_password}
                onChange={(confirmar_password) => setConfirmarPassword(confirmar_password)}
                placeholder='Introducir email'
                placeholderTextColor='#252525'
                ref={(input) => { text_correo = input }}
                onSubmitEditing={() => enviar_correo()}
                returnKeyType='done'
                autoCapitalize='none'/>
              
              <TouchableOpacity style={[styles.boton_enviar]} onPress={() => enviar_correo()}>
                  <Text style={styles.texto_enviar}>Enviar</Text>
              </TouchableOpacity>
            </View>
            
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
    marginBottom: 49
  },
  logo: {
    width: 235,
    height: 217,
    alignSelf: 'center'
  },
  view_container:{
    flex: 1,
    width: '100%'
  },
  input: {
    width: 284,
    height: 43, 
    alignContent: 'center',
    borderColor: '#252525',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 26,
    color: '#252525',
    alignSelf: 'center',
    marginBottom: 61,
    fontFamily: 'Nunito-Regular'
  },
  boton_enviar: {
    width: 270,
    height: 58,
    alignSelf: 'center',
    borderRadius: 40,
    backgroundColor: '#ff0000'
  },
  texto_enviar: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    lineHeight: 58,
    textAlign: 'center'
  },
  texto_titulo: {
    fontSize: 25,
    lineHeight: 34,
    alignSelf: 'center',
    marginBottom: 8,
    fontFamily: 'Nunito-Black'
  },
  texto_descripcion: {
    fontSize: 12,
    lineHeight: 16,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 38,
    fontFamily: 'Nunito-Regular'
  },
  texto_correo: {
    width: 284,
    fontSize: 17,
    lineHeight: 23,
    marginBottom: 8,
    fontFamily: 'Nunito-Black',
    alignSelf: 'center'
  }
})