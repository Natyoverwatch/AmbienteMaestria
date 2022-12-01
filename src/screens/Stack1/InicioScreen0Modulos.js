import { View, Text,StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const modulos = [
  {
	id: 1,
	name: "Modulo 1",
  colorbordebox1:"",
  color: "#1F646D",
  sentido: "right",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../imagenes/pythontemplate.png"),
  image: require("../../../imagenes/number1.png")
  },
  {
	id: 2,
	name: "Modulo 2",
  colorbordebox1:"",
  color: "#FFFFFF",
  sentido: "left",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../imagenes/pythontemplate.png"),
  image: require("../../../imagenes/number1.png")
  },
  {
	id: 3,
	name: "Modulo 3",
  sentido: "right",
  colorbordebox1:"",
  color: "#1F646D",
  lecciontext:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
  imageleccion:require("../../../imagenes/pythontemplate.png"),
  image: require("../../../imagenes/number1.png")
  },
  
];

function Orderlecciones() {

  return(
    <View>
      {modulos.map((modulo) => {
        if(modulo.sentido=="left"){
          return (
            <TouchableOpacity 
              key={modulo.id} 
              style={[styles.leccontainer,{backgroundColor: modulo.color,}]}
              onPress={()=> console.log("Touched!!")}
            >
              <View style={styles.row}>
                <View style={[styles.box1, {  }]}>
                <Image
                    source={modulo.image}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={[styles.box2, {  }]}>
                  <Text style={{textAlign:"center",fontSize:16}}>{modulo.lecciontext}</Text>
                </View>
                <View style={[styles.box3, {  }]}>
                  <Image 
                    source={modulo.imageleccion}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
              
            </TouchableOpacity>
  
          );
        }else if(modulo.sentido=="right"){
          return (
            <TouchableOpacity 
              key={modulo.id} 
              style={[styles.leccontainer,{backgroundColor: modulo.color,}]}
              onPress={()=> console.log("Touched!!")}
            > 
              <View style={styles.row}>
                <View style={[styles.box1, {}]}>
                <Image 
                    source={modulo.imageleccion}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={[styles.box2, {}]}>
                  <Text style={{textAlign:"center",fontSize:15}}>{modulo.lecciontext}</Text>
                </View>
                <View style={[styles.box3, {}]}>
                <Image
                    source={modulo.image}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
              
            </TouchableOpacity>
  
          );
        }
        
      })}
    </View>
  );}

const InicioScreen0Modulos = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.containerPapa}>
      <TouchableOpacity  
                    style={styles.button}
                    onPress={()=> navigation.navigate("Inicio2")}>
                    <Text style={styles.text2}>Empecemos</Text>
                </TouchableOpacity>
      <Text>InicioScreen0Modulos</Text>
      <View style={[styles.leccontainer,]}>
                <TouchableOpacity style={[styles.box1, { borderColor:"#CBD1D1", }]}>
                  <View style={[styles.box1imagen, {  }]}>
                  <Image
                    source={require("../../../imagenes/pythontemplate.png")}
                    style={{width: '100%', height: '100%'}}
                  />
                  </View>
                </TouchableOpacity>
                <View style={[styles.box2, { justifyContent:'flex-end', borderColor:"transparent", marginRight:'10%',}]}>
                <Image
                    source={require("../../../imagenes/flecha.png")}
                    style={{width: '70%', height: '95%', }}
                  />
                </View>
      </View>
      <Image
          source={require("../../../imagenes/numeroM1.png")}
          style={{width: '22%', height: '12%', marginTop:'-48%', marginLeft:'-70%', marginBottom:'20%'}}
        />
      <View style={[styles.leccontainer,]}>
              
              <View style={[styles.box2, { justifyContent:'flex-end', alignItems:'flex-end', borderColor:"transparent", marginLeft:'10%'}]}>
              <Image
                  source={require("../../../imagenes/flecha2.png")}
                  style={{width: '70%', height: '95%'}}
                />
              </View>
              <TouchableOpacity style={[styles.box1, { borderColor:"#CBD1D1", }]}>
                <View style={[styles.box1imagen, {  }]}>
                <Image
                  source={require("../../../imagenes/pythontemplate.png")}
                  style={{width: '100%', height: '100%'}}
                />
                </View>
              </TouchableOpacity>
    </View>
    <Image
        source={require("../../../imagenes/numeroM1.png")}
        style={{width: '22%', height: '12%', marginTop:'-48%', marginLeft:'70%'}}
      />
</View>
  )
}

const styles = StyleSheet.create({
  containerPapa: {
      //paddingTop:15,
      height:'100%',
      width:'100%',
      backgroundColor:'#ffffff',
      alignItems:'center',
    },
  
  button: {
      marginTop:'10%',
      borderRadius: 20,
      borderWidth: 6,
      borderColor: "#315259",
      width: '70%',
      height: '40%',
      backgroundColor:'#FFFFFF',
      alignItems:'center',
      textAlignVertical:'center',
      justifyContent: 'center',
  },
  leccontainer: {
    width:350,
    height:150,
    marginTop:35,
    borderRadius:40,
    alignItems:"center",
    justifyContent: 'center',
    flexDirection: "row",
  },  
  //Cuadrar boxes
  box1: {
    backgroundColor:'#CBD1D1',
    width: '40%',
    height: '80%',
    marginHorizontal:'1.5%',
    borderRadius:10,
    borderWidth:2, 
    alignItems:'center',
    justifyContent: 'center',
  },
  box1imagen: {
    backgroundColor:'#944040',
    borderColor:"#CBD1D1",
    width: '80%',
    height: '80%',
    borderRadius:10,
    borderWidth:2, 
  },
  box2: {
    marginTop:'25%',
    width: '40%',
    height: '80%',
    borderRadius:10,
    marginHorizontal:'1.5%',
    borderWidth:2, 
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
})

export default InicioScreen0Modulos