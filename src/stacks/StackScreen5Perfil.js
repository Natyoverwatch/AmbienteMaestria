import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PerfilScreen0 from '../screens/Stack5/PerfilScreen0';

const FondoHeader = () => (
    <Image
      source={require('../../imagenes/header.png')}
      //style={{width: 300, height: '180%', }}
      style={{width: '100%', height: '180%'}}
    />
  );
  

const StackScreen5Perfi = () => {
    const IntoStack = createStackNavigator();
  
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Perfil1" 
                component={PerfilScreen0}
                options={{
                    title:"Perfil",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color:'#ffffff',
                        fontSize:30,
                        marginLeft:'20%',
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

export default StackScreen5Perfi