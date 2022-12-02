import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen0Modulos from '../screens/Stack1/InicioScreen0Modulos';
import InicioScreen1Leccciones from '../screens/Stack1/Lecciones modulos/InicioScreen1Leccciones';
import InicioScreen1Leccciones3 from '../screens/Stack1/Lecciones modulos/InicioScreen1Leccciones3';
import InicioScreen1Leccciones2 from '../screens/Stack1/Lecciones modulos/InicioScreen1Leccciones2';
import InicioScreen1Leccciones4 from '../screens/Stack1/Lecciones modulos/InicioScreen1Leccciones4';
//Modulo 1 - Leccion 1
import InicioScreen1Explicacion from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion1/InicioScreen1Explicacion';
import InicioScreen3Ejercicio from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion1/InicioScreen3Ejercicio';
import InicioScreen4Codigo from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion1/InicioScreen4Codigo';
import InicioScreen5Terminal from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion1/InicioScreen5Terminal';
import InicioScreen6Siguiente from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion1/InicioScreen6Siguiente';
//Modulo 1 - Leccion 2
import L2InicioScreen1Explicacion from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion2/InicioScreen1Explicacion';
import L2InicioScreen2Explicacion from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion2/InicioScreen2Explicacion';
import L2InicioScreen3Explicacion from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion2/InicioScreen3Explicacion';
import InicioScreen2Ejercicio from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion2/InicioScreen2Ejercicio';
import InicioScreen3Codigo from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion2/InicioScreen3Codigo';
import InicioScreen4Terminal from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion2/InicioScreen4Terminal';
import InicioScreen5Siguiente from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion2/InicioScreen5Siguiente';
//Modulo 1 - Leccion 3
import L3InicioScreen1Explicacion from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion3/InicioScreen1Explicacion';
import L3InicioScreen2Ejercicio from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion3/InicioScreen2Ejercicio';
import L3InicioScreen3Codigo from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion3/InicioScreen3Codigo';
import L3InicioScreen4Terminal from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion3/InicioScreen4Terminal';
import L3InicioScreen5Siguiente from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion3/InicioScreen5Siguiente';
import InicioScreen1Explicacion2 from '../screens/Stack1/Lecciones contenidos/Modulo1/Leccion1/InicioScreen1Explicacion2';


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
                name="Modulo1" 
                component={InicioScreen1Leccciones}
                options={{
                    title:"Primeros Pasos",
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
                name="Modulo1Leccion1Explicacion" 
                component={InicioScreen1Explicacion}
                options={{
                    title:"Zen de Python",
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
                name="Modulo1Leccion1Explicacion2" 
                component={InicioScreen1Explicacion2}
                options={{
                    title:"Zen de Python",
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
                name="Modulo1Leccion1Ejercicio" 
                component={InicioScreen3Ejercicio}
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
            }} />
            <IntoStack.Screen 
                name="Modulo1Leccion1Codigo" 
                component={InicioScreen4Codigo}
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
                name="Modulo1Leccion1Terminal" 
                component={InicioScreen5Terminal}
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
                name="Modulo1Leccion1Siguiente" 
                component={InicioScreen6Siguiente}
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
                name="Modulo1Leccion2Explicacion1" 
                component={L2InicioScreen1Explicacion}
                options={{
                    title:"Función Print",
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
                name="Modulo1Leccion2Explicacion2" 
                component={L2InicioScreen2Explicacion}
                options={{
                    title:"Función Print",
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
                name="Modulo1Leccion2Explicacion3" 
                component={L2InicioScreen3Explicacion}
                options={{
                    title:"Función Print",
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
                name="Modulo1Leccion2Ejercicio" 
                component={InicioScreen2Ejercicio}
                options={{
                    title:"Ejercicio",
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
            }} />
            <IntoStack.Screen 
                name="Modulo1Leccion2Codigo" 
                component={InicioScreen3Codigo}
                options={{
                    title:"Código",
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
                name="Modulo1Leccion2Terminal" 
                component={InicioScreen4Terminal}
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
                name="Modulo1Leccion2Siguiente" 
                component={InicioScreen5Siguiente}
                options={{
                    title:"Sesión superada",
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
                name="Modulo1Leccion3Explicacion" 
                component={L3InicioScreen1Explicacion}
                options={{
                    title:"Comentarios",
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
                name="Modulo1Leccion3Ejercicio" 
                component={L3InicioScreen2Ejercicio}
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
            }} />
            <IntoStack.Screen 
                name="Modulo1Leccion3Codigo" 
                component={L3InicioScreen3Codigo}
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
                name="Modulo1Leccion3Terminal" 
                component={L3InicioScreen4Terminal}
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
                name="Modulo1Leccion3Siguiente" 
                component={L3InicioScreen5Siguiente}
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
                name="Modulo2" 
                component={InicioScreen1Leccciones2}
                options={{
                    title:"Datos",
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
                name="Modulo3" 
                component={InicioScreen1Leccciones3}
                options={{
                    title:"Operadores básicos",
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
                name="Modulo4" 
                component={InicioScreen1Leccciones4}
                options={{
                    title:"Estructura de datos",
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
            
        </IntoStack.Navigator>
    );
}