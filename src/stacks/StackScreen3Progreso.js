import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ProgresoScreen0 from '../screens/Stack3/ProgresoScreen0';


const FondoHeader = () => (
    <Image
      source={require('../../imagenes/header.png')}
      //style={{width: 300, height: '180%', }}
      style={{width: '100%', height: '180%'}}
    />
  );

const StackScreen3Progreso = () => {
  const IntoStack = createStackNavigator();
  
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Progreso1" 
                component={ProgresoScreen0}
                options={{
                    title:'Progreso ',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color:'#ffffff',
                        fontSize:28,
                        marginLeft:'10%',
                        marginTop:'13%'
                    },
                    headerStyle: {
                        backgroundColor: '#1F646D',
                        shadowColor:'transparent',
                    },
                    headerLeft: null,
                    headerBackground:FondoHeader,
                }}/>
        </IntoStack.Navigator>
    )
}

export default StackScreen3Progreso