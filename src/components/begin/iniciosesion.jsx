import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

import {ICON} from '../../assets/constants/images'
import { useDispatch, useSelector } from 'react-redux';
import {begindata} from '../../redux/slice/begindata';
import {beginConstants} from '../../redux/uri/begin-constants'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InicioSesionScreen ({navigation}) {

    const dispatch = useDispatch()

    const [usuario, setUsuario] = useState ('')
    const [password, setPassword] = useState ('')

    const {login_user} = useSelector(({begin}) => begin)
    const begin = useSelector (({begin}) => begin)
    
    useEffect (() => {
      if (login_user && login_user.access_token && login_user.usuario){
        save_token_email (login_user.access_token, login_user.usuario.email)
      }
    }, [login_user])

    const save_token_email = async (token, email) => {
      try {
        await AsyncStorage.setItem ('token', token)
        await AsyncStorage.setItem ('email', email)
        dispatch (begindata(beginConstants({}, true, 0, 0).login_user))
        navigation.navigate ('HomeStack')
      } catch (error) {
        
      }
    }

    const iniciar_sesion = () => {
      if (usuario === '' || password === ''){

      } else{
        const data_user = {
          email: usuario,
          password: password
        }
        dispatch (begindata(beginConstants(data_user, false, 0, 0).login_user))
      } 
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <ScrollView style={styles.fondo}>
              <Image source={ICON.LOGO_WHITE_191} style={styles.logo}/>
              <Image source={ICON.AVATAR_WHITE_199} style={[styles.avatar]}/>
              
              <TextInput
                keyboardType='email-address'
                style={[styles.input, {marginBottom: 22}]}
                value={usuario}
                onChangeText={(usuario) => setUsuario(usuario)}
                placeholder='Usuario'
                placeholderTextColor='#ffffff'
                onSubmitEditing={() => text_contrasenia.focus()}
                returnKeyType='next'
                autoCapitalize='none'/>

              <TextInput
                keyboardType='default'
                style={[styles.input, {marginBottom: 47}]}
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder='Contraseña'
                placeholderTextColor='#ffffff'
                ref={(input) => { text_contrasenia = input }}
                onSubmitEditing={() => iniciar_sesion()}
                returnKeyType='done'
                secureTextEntry={true}
                autoCapitalize='none'/>
              
              <TouchableOpacity style={[styles.boton_ingresar]} onPress={() => iniciar_sesion()}>
                <Text style={styles.texto_ingresar}>Ingresar</Text>
              </TouchableOpacity>
            
              <View style={[styles.view_olvidaste, {marginBottom: 79}]}>
                <Text style={[styles.texto_olvidaste, {fontFamily: 'Nunito-Regular', marginRight: 5}]}>¿Has olvidado tu contraeña?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RestablecerPassScreen')}>
                    <Text style={[styles.texto_olvidaste, {fontFamily: 'Nunito-Bold'}]}>Click aquí</Text>
                </TouchableOpacity>
              </View>
            
              <View style={styles.view_olvidaste}>
                <Text style={[styles.texto_crea, {fontFamily: 'Nunito-Regular', marginRight: 5}]}>¿Eres nuevo usuario?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegistroScreen')}>
                    <Text style={[styles.texto_crea, {fontFamily: 'Nunito-Bold'}]}>Crea tu cuenta</Text>
                </TouchableOpacity>
              </View>
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
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fondo: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ff0000'
  },
  logo: {
    width: 191,
    height: 191,
    alignSelf: 'center'
  },
  avatar: {
    width: 199,
    height: 199,
    alignSelf: 'center',
    marginBottom: 15
  },
  input: {
    width: 284,
    height: 43, 
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 26,
    color: 'white',
    fontFamily: 'Nunito-Regular'
  },
  boton_ingresar: {
    width: 270,
    height: 58,
    alignSelf: 'center',
    borderRadius: 40,
    backgroundColor: '#252525',
    marginBottom: 23
  },
  texto_ingresar:{ 
    color: 'white',
    fontSize: 25,
    lineHeight: 58,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold'
  },
  view_olvidaste: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  texto_olvidaste: {
    color: 'white',
    fontSize: 14,
    lineHeight: 19
  },
  texto_crea: {
    color: 'white',
    fontSize: 14,
    lineHeight: 19
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