import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const FondoHeader = () => (
  <Image
    source={require("../../../imagenes/imagenM1.png")}
    //style={{width: 300, height: '180%', }}
    style={{width: '100%', height: '100%'}}
  />
);

const ProgresoScreen0 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressmodule}>
        <View 
        style={[styles.moduleimg,{
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity:  0.19,
          shadowRadius: 5.62,
          elevation: 6,
          borderRadius:10,}]}>
              <Image
    source={require("../../../imagenes/imagenM1.png")}
    //style={{width: 300, height: '180%', }}
    style={{width: '100%', height: '100%',borderRadius:10,}}
  />
        </View>
        <View style={styles.moduleprogress}>
        <Progress.Pie progress={0.9} size={150} style={{}} />
        <View style={{width:"80%",height:"80%",backgroundColor:"red",marginTop:-16*8,borderRadius:200,}}>
          
        </View>
        </View>
      </View>

      
      
      


        <ScrollView style={styles.scrollView}>
        <View style={styles.progressmodule}>

        </View>
        </ScrollView>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor:"white",
    margin:10,
    borderRadius:20,
    padding:10,
    marginTop:"20%",
  },
  progressmodule:{
    width:"100%",
    height:"30%",
    backgroundColor:"white",
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.19,
    shadowRadius: 5.62,
    elevation: 6,
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"5%"
  },  
  moduleimg:{
    width:"40%",
    height:"80%",
    backgroundColor:"yellow",
    margin:10,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
  },
  moduleprogress:{
    width:"40%",
    height:"80%",
    backgroundColor:"yellow",
    margin:10,
    alignItems:"center",
    justifyContent:"center",
  },
});


export default ProgresoScreen0