import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CalendarioScreen0 from '../screens/Stack4/CalendarioScreen0';

const FondoHeader = () => (
    <Image
      source={require('../../imagenes/header.png')}
      //style={{width: 300, height: '180%', }}
      style={{width: '100%', height: '180%'}}
    />
  );

const StackScreen4Calendario = () => {
  const IntoStack = createStackNavigator();
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Calendario1" 
                component={CalendarioScreen0}
                options={{
                    title:'Calendario',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color:'#ffffff',
                        fontSize:28,
                        marginLeft:'10%',
                        marginTop:'15%'
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

export default StackScreen4Calendario