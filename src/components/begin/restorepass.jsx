import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import {ICON} from '../../assets/constants/images'
import { useDispatch, useSelector } from 'react-redux';
import {begindata} from '../../redux/slice/begindata';
import { beginConstants } from '../../redux/uri/begin-constants';

export default function RestorePassScreen ({navigation}) {

  const dispatch = useDispatch()

  const [email, setEmail] = useState ('')

  const [eemail, setEEmail] = useState (false)

  const {forgot_password} = useSelector(({begin}) => begin)
  const begin = useSelector (({begin}) => begin)

  /**The email was sent successfully
   * redirects to LoginScreen
   */
  useEffect(() => {
    if (forgot_password){
      dispatch(begindata(beginConstants({}, true, 0, 0).forgot_password))
      navigation.navigate('LoginScreen')
    }
  }, [forgot_password])

    /**Valid if  enter the email 
     * and sends it
    */
    const send_email = () => {
      const envio_correo = {
        email: email
      }
      dispatch(begindata(beginConstants(envio_correo, false, 0, 0).forgot_password))
    }

    return (
      <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
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
                  value={email}
                  onChangeText={(email) => setEmail(email)}
                  placeholder='Introducir email'
                  placeholderTextColor='#252525'
                  ref={(input) => { text_email = input }}
                  onSubmitEditing={() => send_email()}
                  returnKeyType='done'
                  autoCapitalize='none'/>
                
                <TouchableOpacity style={[styles.boton_enviar]} onPress={() => send_email()}>
                    <Text style={styles.texto_enviar}>Enviar</Text>
                </TouchableOpacity>
              </View>
              
          </GestureHandlerRootView>
              {
                begin.loading ? ( 
                  <View style={styles.view_loading}>
                    <Image source={ICON.LOADING_SCREEN} style={styles.icono_loading}/>
                  </View>
                ) : null
              }
      </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  sub_container:{
    backgroundColor: 'white',
    flex: 1,
    width: '100%'
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