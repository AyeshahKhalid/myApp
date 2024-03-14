import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native'

const App = () => {
  const [name, setName] = useState("Ayesha");
  function changeName() {
    setName('namse')
  }

  return (
    <View>
      <Text style={{ color: 'blue', fontSize: 40 }}>Hello {name}</Text>
      <Button title='send' onPress={changeName} color={'green'} />
      <ChildApp name='Farheen' />
      {/* <CreateForms /> */}
      {/* <MyFlatList /> */}
      {/* <ListMap /> */}
      <MyGrid />
    </View>
  )
}

const ChildApp = (props) => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text style={[{ backgroundColor: 'yellow', fontSize: 30 }, styles.textBox]}>Greetings {props.name}</Text>
      <Text style={{ fontSize: 20, padding: 20 }}>Your Name is: {name}</Text>
      <TextInput placeholder='Enter your name' value={name} style={styles.inputField} onChangeText={(text) => setName(text)}
      />
      <Button title="Remove name" onPress={() => setName('')} />
    </View>
  )
}

const CreateForms = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [number, setNumber] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSecure, setSecurity] = useState(true);

  return (
    <View>
      <TextInput style={styles.inputField} placeholder='Enter your Name' value={name} onChangeText={(text) => setName(text)}></TextInput>
      <TextInput style={styles.inputField} placeholder='Enter your Age' secureTextEntry={isSecure} value={age} onChangeText={(text) => setAge(text)}></TextInput>
      <TextInput style={styles.inputField} placeholder='Enter your Number' value={number} onChangeText={(text) => setNumber(text)}></TextInput>
      <Button title='submit Data' color={'red'} onPress={() => setIsSubmit(true)}></Button>
      <Button title='icon' color='green' onPress={() => setSecurity(!isSecure)}></Button>

      {
        isSubmit ?
          <View>
            <Text>Your name is  {name}</Text>
            <Text>Your age is {age}</Text>
            <Text>Your number is {number}</Text>
          </View>
          :
          null
      }

    </View>
  )
}

const MyFlatList = () => {
  const users = [
    {
      id: 1,
      name: "ayesha"
    },
    {
      id: 2,
      name: "sana"
    },
    {
      id: 3,
      name: "maheem"
    },
    {
      id: 4,
      name: "laraib"
    }
  ]
  return (
    <View>
      <FlatList

        data={users}
        renderItem={({ item }) => <Text style={styles.flatList}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
//list with map funtion
const ListMap = () => {
  const users = [
    {
      id: 1,
      name: "ayesha"
    },
    {
      id: 2,
      name: "sana"
    },
    {
      id: 3,
      name: "maheem"
    },
    {
      id: 4,
      name: "laraib"
    }
  ]
  return (
    <View>
      <ScrollView>
        {
          users.map((item, index) =>
            <Text style={styles.flatList}>{index + 1}.{item.name}</Text>
          )
        }
      </ScrollView>
    </View>
  );
}

//Make Grid using flex
const MyGrid = () => {
  const colors = ['red', 'blue', 'yellow', 'green', 'gray', 'pink', 'brown', 'purple', 'white', 'black', 'orange']
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Text style={styles.gridbox}>Sam</Text>
      <Text>Sam</Text>
      <Text>Sam</Text>
      <Text>Sam</Text>
      <Text>Sam</Text>
      <Text>Sam</Text>
      {colors.map((color)=><Text style={[{backgroundColor:color},styles.gridbox]}>{color}</Text>)}
    </View>
  )
}
const styles = StyleSheet.create({
  textBox: {
    color: 'red'
  },
  inputField: {
    borderWidth: 1,
    fontSize: 15,
    margin: 15,
    padding: 10
  },
  flatList: {
    fontSize: 15,
    backgroundColor: 'gray',
    margin: 15,
    padding: 10
  }
  , gridbox: {
    width: 80,
    height: 80,
    borderWidth: 1,
    // backgroundColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 5
  }
})
export default App;