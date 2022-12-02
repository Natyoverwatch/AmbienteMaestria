import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const L3InicioScreen1Explicacion = () => {
  return (
    <View style={styles.container}>
      <Text>InicioScreen0Modulos</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop:'8%',
    backgroundColor:'#15DB25',
  },
  image: {
    flex: 1,
  },
  containerprogressbar: {
    backgroundColor: '#1F646D',
    width:310,
    height:26,
    marginTop:"40%",
    borderRadius:10,
  },
  progress: {
    margin: 10,
    backgroundColor:"white",
    borderColor:"#fff",
  },
});

export default L3InicioScreen1Explicacion