import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InicioScreen2Explicacion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerprogressbar}>
      </View>
      <Text>InicioScreen0Modulos</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop:'8%',
    backgroundColor:'#E2E2E2',
  },
  image: {
    flex: 1,
  },
  containerprogressbar: {
    backgroundColor: '#8CB0B9',
    width:'90%',
    height:'6%',
    marginTop:"40%",
    borderRadius:40,
  },
  progress: {
    margin: 10,
    backgroundColor:"white",
    borderColor:"#fff",
  },
});

export default InicioScreen2Explicacion