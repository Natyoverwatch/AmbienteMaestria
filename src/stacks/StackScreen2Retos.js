import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import RetosScreen0Inicio from '../screens/Stack2/RetosScreen0Inicio';
import RetosScreen1Reto1 from '../screens/Stack2/RetosScreen1Reto1';
import RetosScreenReto1mal from '../screens/Stack2/RetosScreenReto1mal';
import RetosScreenReto1bien from '../screens/Stack2/RetosScreenReto1bien';

const FondoHeader = () => (
  <Image
    source={require('../../imagenes/header.png')}
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

const StackScreen2Retos = () => {
  const IntoStack = createStackNavigator();
  
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Reto" 
                component={RetosScreen0Inicio}
                options={{
                    headerShown:false,
                }}/>
            <IntoStack.Screen 
                name="Reto1" 
                component={RetosScreen1Reto1}
                options={{
                    title:"Reto Print",
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
                name="Reto1mal" 
                component={RetosScreenReto1mal}
                options={{
                  headerShown:false,
                    }}/>
            <IntoStack.Screen 
                name="Reto1bien" 
                component={RetosScreenReto1bien}
                options={{
                  headerShown:false,
                    }}/>
        </IntoStack.Navigator>
    )
}

export default StackScreen2Retos