import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import * as Font from 'expo-font';

import {ICON} from '../../assets/constants/images'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'

export default function LoadingScreen ({navigation}) {

    const isFocused = useIsFocused()

    const fontsLoaded = {
        'Nunito-Medium':    require('../../assets/fonts/Nunito-Medium.ttf'),
        'Nunito-Black':     require('../../assets/fonts/Nunito-Black.ttf'),
        'Nunito-ExtraBold': require('../../assets/fonts/Nunito-ExtraBold.ttf'),
        'Nunito-Regular':   require('../../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-Bold':      require('../../assets/fonts/Nunito-Bold.ttf'),
        'Nunito-SemiBold':  require('../../assets/fonts/Nunito-SemiBold.ttf'),
    }


    useEffect(() => {
        if (isFocused){
            load_font_async ()
        }
    }, [isFocused])

    const load_font_async = async() => {
        await Font.loadAsync(fontsLoaded)
        obtener_token ()
    }

    const obtener_token = async () => {
        try {
            const token = await AsyncStorage.getItem ('token')
            if (token){
                navigation.navigate ('HomeStack')
            }else{
                navigation.navigate ('LoginScreen')
            }
        } catch (error) {
            
        }
    }

    return (
        <View style={styles.container}>
            <Image source={ICON.LOADING_SCREEN} style={styles.loading}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        width: '100%'
    },
    loading: {
        width: '100%'
    }
})