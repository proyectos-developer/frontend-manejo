import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ICON } from '../../../assets/constants/images'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import BarraSuperior from '../comun/barrasuperior'
import { useState } from 'react'

export default function PreguntaSeisScreen ({navigation}) {

    const [opcion, setOpcion] = useState ('')

    const siguiente_pregunta = () => {
        if (opcion === ''){

        }else{
            navigation.navigate ('PreguntaCatCuatroSieteScreen')
        }
    }

    return (
        <GestureHandlerRootView style={{flex: 1, width: '100%'}}>
            <BarraSuperior navigation={navigation} nro_pregunta={6} categoria={'CATEGORÍA 4 - A3A'}/>
            <View style={styles.container}>
                <Text style={styles.texto_pregunta}>Si al conducir un vehículo se encuentra con la señal {`\n`}vertical que se muestra, usted debe entender qué:</Text>
                <View style={styles.opcion_imagen}>
                    <Image source={ICON.PREGUNTA_IMAGEN} />
                </View>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('a')}>
                    <Image source={opcion === 'a' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>Si quiere girar hacia la derecha debe {`\n`}pasar la intersección y dar la vuelta a la {`\n`}manzana.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('b')}>
                    <Image source={opcion === 'b' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>En la intersección esta prohibido girar a {`\n`}la izquierda y por lo tanto, si desea seguir {`\n`}esa ruta hacerlo una cuadra antes.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opcion_respuesta} onPress={() => setOpcion ('c')}>
                    <Image source={opcion === 'c' ? ICON.RADIO_SELECT : ICON.RADIO_UNSELECT} style={styles.radio_select}/>
                    <Text style={styles.texto_opcion}>En esa dirección hay una zona de {`\n`}parqueo.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton_siguiente} onPress={() => siguiente_pregunta()}>
                    <Text style={styles.texto_siguiente}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    texto_pregunta: {
        fontFamily: 'Nunito-Black', fontSize: 13, lineHeight: 18, color: '#252525', 
        textAlign: 'center', 
        marginBottom: 11
    },
    opcion_imagen: {
        width: 150,
        height: 95,
        marginBottom: 15
    },
    opcion_respuesta: {
        width: 330,
        height: 81,
        marginBottom: 19,
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 18,
        paddingLeft: 18
    },
    radio_select: {
        width: 25,
        height: 25,
        marginRight: 16
    },
    texto_opcion: {
        fontFamily: 'Nunito-Regular', fontSize: 14, lineHeight: 18, color: '#252525'
    },
    boton_siguiente: {
        backgroundColor: '#ff0000',
        borderRadius: 40,
        width: 270,
        height: 58,
        marginLeft: 45,
        marginRight: 45,
        marginTop: 22
    },
    texto_siguiente: {
        fontFamily: 'Nunito-Bold', fontSize: 25, lineHeight: 58, color: 'white', textAlign: 'center'
    }
})