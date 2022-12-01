import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen0Modulos from '../screens/Stack1/InicioScreen0Modulos';
import InicioScreen1Leccciones from '../screens/Stack1/Lecciones/InicioScreen1Leccciones';
import InicioScreen2Explicacion from '../screens/Stack1/InicioScreen2Explicacion';
import InicioScreen3Ejercicio from '../screens/Stack1/InicioScreen3Ejercicio';
import InicioScreen4Codigo from '../screens/Stack1/InicioScreen4Codigo';
import InicioScreen5Terminal from '../screens/Stack1/InicioScreen5Terminal';
import InicioScreen6Siguiente from '../screens/Stack1/InicioScreen6Siguiente';
import InicioScreen1Leccciones3 from '../screens/Stack1/Lecciones/InicioScreen1Leccciones3';
import InicioScreen1Leccciones2 from '../screens/Stack1/Lecciones/InicioScreen1Leccciones2';
import InicioScreen1Leccciones4 from '../screens/Stack1/Lecciones/InicioScreen1Leccciones4';

const FondoHeader = () => (
  <Image
    source={require('../../imagenes/header.png')}
    //style={{width: 300, height: '180%', }}
    style={{width: '100%', height: '180%'}}
  />
);
const FondoHeader2 = () => (
    <Image
      source={require('../../imagenes/header2.png')}
      //style={{width: 300, height: '180%', }}
      style={{width: '100%', height: '180%'}}
    />
  );

const BackImage = () => (
  <Image
    source={require('../../imagenes/arrow.png')}
    style={{width: 70, height: 70}}
  />
);

const BackImage2 = () => (
    <Image
      source={require('../../imagenes/arrow2.png')}
      style={{width: 35, height: 35, marginLeft:15}}
    />
  );

export const StackScreen1Inicio = () => {
  const IntoStack = createStackNavigator();
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Inicio1" 
                component={InicioScreen0Modulos} 
                options={{
                    headerShown: false,
                }}/>
            <IntoStack.Screen 
                name="Inicio2.1" 
                component={InicioScreen1Leccciones}
                options={{
                    title:"Lecciones",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#ffffff',
                      fontSize:25,
                      marginLeft:-30,
                    },
                    headerTransparent: true,
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        
                    },
                    headerBackground:FondoHeader,
                    }}/>
            <IntoStack.Screen 
                name="Inicio2.2" 
                component={InicioScreen1Leccciones2}
                options={{
                    title:"Lecciones",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#ffffff',
                      fontSize:25,
                      marginLeft:-30,
                    },
                    headerTransparent: true,
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        
                    },
                    headerBackground:FondoHeader,
                    }}/>
            <IntoStack.Screen 
                name="Inicio2.3" 
                component={InicioScreen1Leccciones3}
                options={{
                    title:"Lecciones",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#ffffff',
                      fontSize:25,
                      marginLeft:-30,
                    },
                    headerTransparent: true,
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        
                    },
                    headerBackground:FondoHeader,
                    }}/>
            <IntoStack.Screen 
                name="Inicio2.4" 
                component={InicioScreen1Leccciones4}
                options={{
                    title:"Lecciones",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#ffffff',
                      fontSize:25,
                      marginLeft:-30,
                    },
                    headerTransparent: true,
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        
                    },
                    headerBackground:FondoHeader,
                    }}/>
            <IntoStack.Screen 
                name="Inicio3" 
                component={InicioScreen2Explicacion}
                options={{
                    title:false,
                    headerTitle:{
                        color: 'white',
                    },
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                    },
                    }}/>
            <IntoStack.Screen 
                name="Inicio4" 
                component={InicioScreen3Ejercicio}
                options={{
                    title:false,
                    headerTitle:{
                        color: 'white',
                    },
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                    },
                    }} />
            <IntoStack.Screen 
                name="Inicio5" 
                component={InicioScreen4Codigo}
                options={{
                    title:false,
                    headerTitle:{
                        color: 'white',
                    },
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                    },
                    }}/>
            <IntoStack.Screen 
                name="Inicio6" 
                component={InicioScreen5Terminal}
                options={{
                    title:false,
                    headerTitle:{
                        color: 'white',
                    },
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                    },
                    }}/>
            <IntoStack.Screen 
                name="Inicio7" 
                component={InicioScreen6Siguiente}
                options={{
                    title:false,
                    headerTitle:{
                        color: 'white',
                    },
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                    },
                    }}/>
        </IntoStack.Navigator>
    );
}