import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react';
import { Calendar,Agenda  } from 'react-native-calendars';

const eventos = [
  { 
    id: 1,
    fecha:"2022-12-12",
    evento:"Torneo Python",
    hora:"12 AM",

  },{
    id: 2,
    fecha:"2022-12-13",
    evento:"Conferencia",
    hora:"2 PM",
  },
  {
    id: 3,
    fecha:"2022-12-14",
    evento:"Reto Nuevo",
    hora:"5 PM",
  },

]

let marked='';

function CalendarioEventos(){
  console.log(Object.keys(marked))
  return(
    <View style={styles.row}>
      
      {eventos.map((person,i) => {
        return (
              <View style={styles.box} key={person.id} >
                  
                          <Text style={styles.textonumero}>{i+1} </Text>
                          <Text style={styles.textoevento}> {person.evento}</Text>
                          <Text style={styles.textofecha}> {person.fecha}</Text>
                          <Text style={styles.textohora}> {person.hora}</Text>
                          </View>
        );
      })}
    </View>
  );
}

const CalendarioScreen0 = () => {
  marked = {
    '2022-12-12': { marked: true, dotColor: 'red' },
    '2022-12-13': { marked: true, dotColor: 'red' },
    '2022-12-14': { marked: true, dotColor: 'red' }
  };

    

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width:"90%",height:"100%",alignContent:"center",marginTop:"5%"}}>
      <Calendar markedDates={marked}/>
              <Text style={{margin:"5%",textAlign:"center",fontSize:20,color:"#2F2260",fontWeight: 'bold'}}>Eventos de este mes</Text>
        <CalendarioEventos />
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor:"white",
    margin:10,
    borderRadius:50,
    padding:10,
    marginTop:"20%",

  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  },
  row: {
    marginTop:0,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"center",
    padding:2,
  },
  box:{
    width:"110%",
    height:"50%",
    backgroundColor:"#F1F2F2",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop:10,
    justifyContent:"space-between",
    alignItems:"center",
    alignContent:"center",
    borderRadius:50,
  },  
  textonumero:{
    fontSize:20,
    marginLeft:"5%",
    fontWeight: 'bold'
  },
  textoevento:{
    marginRight:"15%",
    fontWeight: 'bold',

  },
  textofecha:{
    fontWeight: 'bold',
  },
  textohora:{
    marginRight:"5%",
    fontWeight: 'bold',
  },
});

export default CalendarioScreen0