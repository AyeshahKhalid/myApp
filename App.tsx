import React,{useState} from 'react';
import { Button, Text, View,StyleSheet, TextInput } from 'react-native'

const App = () => {
  const [name,setName]=useState("Ayesha");
  function changeName(){
    setName('namse')
  }
  
  return (
    <View>
      <Text style={{color:'blue',fontSize:40}}>Hello {name}</Text>
      <Button title='send' onPress={changeName} color={'green'}/>
      <ChildApp name='Farheen'/>
    </View>
    )
}

const ChildApp=(props)=>{
  const [name,setName]=useState('')
  return (
    <View>
      <Text style={[{backgroundColor:'yellow',fontSize:30},styles.textBox]}>Greetings {props.name}</Text>
      <Text style={{fontSize:20,padding:20}}>Your Name is: {name}</Text>
      <TextInput placeholder='Enter your name' value={name} style={styles.inputField} onChangeText={(text)=>setName(text)}
      />
      <Button title="Remove name" onPress={()=>setName('')}/>
    </View>
  )
}

const styles=StyleSheet.create({
  textBox:{
    color:'red'
  },
  inputField:{
    borderWidth:1,
    fontSize:15,
    margin:10,
    padding:10
  }
})
export default App;