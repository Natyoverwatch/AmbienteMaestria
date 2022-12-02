import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InicioScreen1Explicacion = () => {
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
    backgroundColor:'#D80C0C',
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

export default InicioScreen1Explicacion