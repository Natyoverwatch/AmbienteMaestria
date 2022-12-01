import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack' // crea un stack de navegacion nativo para el telefono
import { NavigationContainer } from '@react-navigation/native';
//Screens
import {IntroScreen0Empezar} from '../screens/Stack0/IntroScreen0Empezar';
import {IntroScreen1Ingresar} from '../screens/Stack0/IntroScreen1Ingresar';
import {IntroScreen2Registrarse} from '../screens/Stack0/IntroScreen2Registrarse';
import IntroScreen3Presentacion from '../screens/Stack0/IntroScreen3Presentacion';
import { Ionicons, AntDesign, MaterialCommunityIcons,Foundation,FontAwesome5   } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { useFonts } from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';
import { StackScreen1Inicio } from './StackScreen1Inicio';
import StackScreen2Retos from './StackScreen2Retos';
import StackScreen3Progreso from './StackScreen3Progreso';
import StackScreen4Calendario from './StackScreen4Calendario';
import StackScreen5Perfi from './StackScreen5Perfil';

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

function HomeStack() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator 
          screenOptions={{
              tabBarInactiveBackgroundColor:'#21828F',
              tabBarActiveBackgroundColor: "#CCCECE",
              tabBarShowLabel:false,
        }}>
      <Tab.Screen name="InicioMenu" component={StackScreen1Inicio} 
      options={{
          headerShown:false,
          tabBarIcon: (tabInfo) => {
              return (
              <Ionicons
                  name="md-home"
                  size={24}
                  color={tabInfo.focused ? "#21828F" : "#ffffff"}
              />
              )}
      }}/>
      <Tab.Screen name="RetosMenu" component={StackScreen2Retos}
      options={{
        headerShown:false,
          tabBarIcon: (tabInfo) => {
              return (
              <FontAwesome5 
                  name="flag-checkered"
                  size={24}
                  color={tabInfo.focused ? "#21828F" : "#ffffff"}
              />
              )}
      }}/>
      <Tab.Screen name="ProgresoMenu" component={StackScreen3Progreso}
       options={{
        headerShown:false,
          tabBarIcon: (tabInfo) => {
              return (
              <MaterialCommunityIcons
                  name="progress-star"
                  size={24}
                  color={tabInfo.focused ? "#21828F" : "#ffffff"}
              />
              )}
      }}/>
      <Tab.Screen name="CalendarioMenu" component={StackScreen4Calendario}
       options={{
        headerShown:false,
          tabBarIcon: (tabInfo) => {
              return (
              <Foundation 
                  name="calendar"
                  size={24}
                  color={tabInfo.focused ? "#21828F" : "#ffffff"}
              />
              )}
      }}/>
      <Tab.Screen name="PerfilMenu" component={StackScreen5Perfi}
       options={{
        headerShown:false,
          tabBarIcon: (tabInfo) => {
              return (
              <Ionicons
                  name="md-person-circle-outline"
                  size={24}
                  color={tabInfo.focused ? "#21828F" : "#ffffff"}
              />
              )}
      }}/>
  </Tab.Navigator>
  );
}

export const StackScreen0Intro = () => {

  const IntoStack = createStackNavigator();
    return (
      <NavigationContainer>
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Intro1" 
                component={IntroScreen0Empezar}
                options={{
                    title:false,
                    headerStyle: {
                        backgroundColor: '#1F646D',
                        shadowColor:'transparent',
                    },
                }}
                />
            <IntoStack.Screen 
                name="Intro2" 
                component={IntroScreen1Ingresar}
                options={{
                    title:"Ingresar",
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
                name="Intro3" 
                component={IntroScreen2Registrarse}
                options={{
                    title:"Ingresar",
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
                name="Intro4" 
                component={IntroScreen3Presentacion}
                options={{
                    title:"Bienvenid@",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#1F646D',
                      fontSize:25,
                      marginLeft:-10,
                    },
                    headerTransparent: true,
                    headerBackImage: BackImage2,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        
                    },
                    headerBackground:FondoHeader2,
                    }}/>
                    <IntoStack.Screen 
                name="Intro5" 
                component={HomeStack}
                options={{
                  headerShown:false,
                    }}/>
        </IntoStack.Navigator>
        </NavigationContainer>
    )
}
