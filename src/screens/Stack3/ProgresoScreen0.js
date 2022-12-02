import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,View,Image } from 'react-native';

import * as Progress from 'react-native-progress';


let progressM1=0.3333;
let progressM2=0.0;
let progressM3=0.0;
let progressM4=0.0;

const Modulos=[
  {
    id: 1,
	  name: "Modulo 1",
    imagenmodulo:require("../../../imagenes/imagenM1.png"),
    progreso:progressM1,
  },
  {
    id: 2,
	  name: "Modulo 2",
    imagenmodulo:require("../../../imagenes/imagenM2.png"),
    progreso:progressM2,

  },
  {
    id: 3,
	  name: "Modulo 3",
    imagenmodulo:require("../../../imagenes/imagenM3.png"),
    progreso:progressM3,
    
  },
  {
    id: 4,
	  name: "Modulo 4",
    imagenmodulo:require("../../../imagenes/imagenM4.png"),
    progreso:progressM4,

  },
]



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
      <ScrollView style={styles.scrollView}>
        {Modulos.map((modulo) => {
          return(
            <View style={styles.progressmodule} key={modulo.id}>
        <View style={[styles.moduleimg,{}]}>
          <Image
            source={modulo.imagenmodulo}
                //style={{width: 300, height: '180%', }}
            style={{width:120, height:120,borderRadius:10}}
          />
        </View>
        <View style={[styles.moduleprogress,{}]}>
        <Text style={{marginBottom:"10%",fontSize:20,fontWeight:"bold"}}> {modulo.name}</Text>
           <Progress.Pie progress={modulo.progreso} size={90} style={{}}  color="#7FB9FF" borderColor='white' />
           <View style={{
            width:60,
            height:60,
            backgroundColor:"#ffffff",
            marginTop:"-53%",
            borderRadius:200,
            justifyContent:"center",
            alignItems:"center",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity:  0.19,
            shadowRadius: 5.62,
            elevation: 6,
            }}>
              <Text>{modulo.progreso*100}%</Text>
           </View>
        </View>
        </View>
          );
        }
        )}
        

        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginTop:"10%",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
  progressmodule:{
    width:"90%",
    margin:"5%",
    backgroundColor:"white",
    borderRadius: 50,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 6,
flexDirection:"row",
  },
  moduleimg:{
    width:"35%",
    margin:"8%",
    padding:2,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity:  0.19,
            shadowRadius: 5.62,
            elevation: 6,
  },
  moduleprogress:{

    width:"40%",
    height:"80%",
    margin:"4%",
    alignItems:"center",

  },
});

export default ProgresoScreen0