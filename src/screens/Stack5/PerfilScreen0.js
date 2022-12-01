import { View, Text,SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react';

import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';
import { getDatabase, ref, onValue} from "firebase/database";

function userdata(){
  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const [todos, setTodos] = useState({});
  const db=getDatabase(app);

  useEffect(() => {
    return onValue(ref(db, '/users/'+global.iduser), querySnapShot => {
      let data = querySnapShot.val() || {};
      let todoItems = {...data};
      setTodos(todoItems);
    });
  }, []);
  
  return todos
 
}

const PerfilScreen0 = () => {
  let userinfo='';
  if(global.iduser!='') userinfo=userdata();
    //console.log(userinfo);
  return (
    <SafeAreaView>
      <Text>{userinfo.username}</Text>
      <Text>{userinfo.curse}</Text>
      <Text>{userinfo.email}</Text>
      
    </SafeAreaView>
  )
}

export default PerfilScreen0