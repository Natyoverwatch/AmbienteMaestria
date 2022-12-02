import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const InicioScreen5Siguiente = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerprogressbar}>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
      <View style={styles.containerprogressbarinsidefull}>
      </View>
    </View>
    
    <Text style={{fontWeight:"bold",fontSize:20,marginTop:"5%"}}>Felicitaciones lograste pasar la lección</Text>
    <Image 
        source={require('../../../../../../imagenes/celebracion.gif')}  
        style={{width: "60%", height: "60%" }}
    />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    paddingTop:'8%',
    backgroundColor:'#FFFFFF',
  },
  image: {
    flex: 1,
  },
  containerprogressbar: {
    flexDirection: "row",
    backgroundColor: '#8CB0B9',
    width:'87%',
    height:'7%',
    marginTop:"40%",
    paddingHorizontal:'10%',
    borderRadius:40,
    alignItems:'center',
    justifyContent:'space-between',
  },
  containerprogressbarinsideempy: {
    backgroundColor: '#ffffff',
    width:'10%',
    height:'50%',
    //marginTop:"40%",
    borderRadius:100,
    borderColor:'#888B8C',
  },
  containerprogressbarinsidefull: {
    backgroundColor: '#1F646D',
    width:'10%',
    height:'50%',
    //marginTop:"40%",
    borderRadius:100,
  },
  texto: {
    paddingHorizontal:'5%',
    textAlign:"center",
    fontSize:20, 
    fontWeight:'400', 
    color:'#085454',
  },
  text2: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: '700'
  },
  button:{
    width:'50%',
    height:'7%',
    borderRadius:10,
    backgroundColor:"#FFAD2B",
    alignItems:'center',
    justifyContent: 'center',
    marginTop:"5%",
  },
});

export default InicioScreen5Siguiente