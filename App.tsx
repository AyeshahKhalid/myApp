import React, { Component, useEffect, useRef, useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput, FlatList, ScrollView, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Pressable, StatusBar, Platform } from 'react-native'
import Animal from './components/Animal';
import Student from './components/Student';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Product from './components/Product';
import Gadget from './components/screen/gadget';


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const App = () => {
  const [name, setName] = useState("Ayesha");
  function changeName() {
    setName('namse')
  }
  const radioBtn = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "React" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Vue" },
    { id: 5, name: "Flutter" },
  ]
  return (
    <View style={{ flex: 1 }}>
      {/* <Text style={{ color: 'blue', fontSize: 40 }}>Hello {name}</Text>
      <Button title='send' onPress={changeName} color={'green'} />
      <ChildApp name='Farheen' /> */}
      {/* <CreateForms /> */}
      {/* <MyFlatList /> */}
      {/* <ListMap /> */}
      {/* <MyGrid /> */}
      {/* <Forest/> */}
      {/* <MySectionList/>  */}
      {/* <UseHook/> */}
      {/* <MyFlexBox /> */}
      {/* <MyTouchableHighlight />*/}
      {/* <MyTouchableOpacity /> */}
      {/* <DynamicRadioBtn radio={radioBtn}/> */}
      {/* <MyModal /> */}
      {/* <MyPressable/> */}
      {/* <MyPlatform/> */}
      {/* <MyStackNavigationScreen /> */}
      {/* <MyTabNavigation/> */}
      {/* <API></API> */}
      {/* <JsonServerApi /> */}
      {/* <DeleteUpdateUser /> */}
      {/* <MyRef /> */}
      {/* <MyAsyncStorage/> */}
      {/* <MyRedux/> */}
      <ReduxNavigation/>
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
    //check git
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
      {colors.map((color) => <Text style={[{ backgroundColor: color }, styles.gridbox]}>{color}</Text>)}
    </View>
  )
}


//component in loop with flatlist

// const Animal=(props)=>{
//   return(
//     <View><Text style={styles.gridbox}>{props.name}</Text></View>
//   );
// }
const Forest = () => {
  const animalName = [
    { id: 1, name: 'lion' },
    { id: 2, name: 'snake' },
    { id: 3, name: 'monkey' },
    { id: 4, name: 'elephant' },
  ]
  return (
    <View>
      <FlatList
        data={animalName}
        renderItem={({ item }) => <Animal name={item.name} />}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

//section list in react native
const MySectionList = () => {
  // useEffect(()=>{
  //   return ()=> {console.warn("232: call on unmount")} //call on unmount when component hide
  // })
  const question = [
    { id: 1, name: 'what is john age?', data: [1, 2, 3, 4] },//data name is necessary for nested array
    { id: 2, name: 'what is sam age?', data: [5, 6, 7, 8] },
    { id: 3, name: 'what is lara age?', data: [9, 0, 1, 2] },
    { id: 4, name: 'what is diana age?', data: [6, 3, 9, 6] },
  ]
  return (
    <SectionList
      sections={question}
      renderItem={({ item, index }) => <Text>{item}</Text>}
      renderSectionHeader={({ section: { name } }) => (<Text>{name}</Text>)}
    />
  );
}


//1. class component
//2. state and props in classs component

class Appss extends Component {
  constructor() {
    super();
    this.state = {
      name: 'ayesha',
    }
  }

  fruit = () => {
    console.warn("this is class componet function syntax")
    this.setState({ name: 'sana' })
  }
  render() {
    return (
      <View>
        <Text>Hello this class A {this.state.name}</Text>
        <Button title="send" onPress={this.fruit}></Button>
        <Student name={this.state.name} />

      </View>
    )
  }
}

//react native life cycle methid 
//use Effeck hook
const UseHook = () => {
  const [count, setCount] = useState(1)
  const [isDisplay, setDisplay] = useState(false)
  // useEffect(()=>{
  //   console.warn("229: use effect hook hello",count)
  // })

  //use effect as component didmount []
  //USE effect as component didupdate means when specific prop update [state]
  //use effect with unmount life cycle
  return (
    <View>

      <Text>Hi it count increasing {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)}></Button>
      <Button title="Display MySectionlist component" color='red' onPress={() => setDisplay(!isDisplay)}></Button>
      {isDisplay ? <MySectionList /> : null}
    </View>
  );
}


//Responsive Layout with Flexbox
const MyFlexBox = () => {
  return (
    <View style={{ backgroundColor: 'green', flex: 1, flexDirection: 'row' }}>
      <View style={{ backgroundColor: 'red', flex: 1, padding: 10 }}>
        <View style={{ backgroundColor: 'pink', flex: 1 }}></View>
        <View style={{ backgroundColor: 'green', flex: 1 }}></View>

      </View>

      <View style={{ backgroundColor: 'purple', flex: 1 }}></View>
      <View style={{ backgroundColor: 'yellow', flex: 1 }}></View>
      <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
    </View>
  );
}
//create custome buttom with touchablehighlight
const MyTouchableHighlight = () => {
  return (
    <View>
      <TouchableHighlight>
        <Text style={styles.warn}>Warning</Text>
      </TouchableHighlight>
    </View>
  );
}

//Create radio button with touchable opacity
const MyTouchableOpacity = () => {
  const [isSelected, setSelected] = useState(1)
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSelected(1)}>
        <View style={styles.radioBtnWrapper}>
          <View style={styles.radioBtn}>
            {isSelected === 1 ?
              <View style={styles.radioBg}></View> : null
            }
          </View>
          <Text style={styles.radioBtnText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelected(2)}>
        <View style={styles.radioBtnWrapper}>
          <View style={styles.radioBtn}>
            {isSelected === 2 ?
              <View style={styles.radioBg}></View> : null
            }
          </View>
          <Text style={styles.radioBtnText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
      {/* loader */}
      <ActivityIndicator size={200} color="red" animating={false}></ActivityIndicator>
    </View>
  );
}

//create dynamic radio button
const DynamicRadioBtn = (props) => {
  const [isSelected, setSelected] = useState(props.radio[0].id)
  return (
    <View style={styles.main}>
      <FlatList
        data={props.radio}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => setSelected(item.id)}>
            <View style={styles.radioBtnWrapper}>
              <View style={styles.radioBtn}>
                {isSelected === item.id ?
                  <View style={styles.radioBg}></View> : null
                }
              </View>
              <Text style={styles.radioBtnText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        }
      />
      {/* loader */}
      <ActivityIndicator size={200} color="red" animating={false}></ActivityIndicator>
    </View>
  );
}

const MyModal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <Modal transparent={true} visible={showModal} animationType='slide'>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", shadowColor: "black", elevation: 1 }}>
          <View style={{ backgroundColor: "skyblue", padding: 40 }}>
            <Text style={{ fontSize: 15, padding: 10 }}>Ramadan Mubarak!</Text>
            <Button title="close modal" onPress={() => setShowModal(false)}></Button>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Button title="open modal" onPress={() => setShowModal(true)}></Button>
      </View>
    </View>
  );
}
const MyPressable = () => {
  return (
    <View style={styles.warn}>
      <Pressable
        delayLongPress={5000}
        onPress={() => console.warn("on click button")}
        onLongPress={() => console.warn("on long click button")}
        onPressIn={() => console.warn("on press in button")}
        onPressOut={() => console.warn("on press out button")}
      >
        <Text style={{ fontSize: 20 }}>Pressable</Text>
      </Pressable>
      {/* status bar */}
      <StatusBar backgroundColor="red" barStyle={'light-content'} hidden={false}></StatusBar>
    </View>
  );
}

const MyPlatform = () => {
  return (
    // <WebView source={{uri:'https://www.youtube.com/'}}/>
    <View>
      <Text style={styles.platform}>Platform:{Platform.OS}</Text>
      <Text style={styles.platform}>{JSON.stringify(Platform)}</Text>
    </View>
  );
}
const Home = (props) => {
  // console.warn(props.route.params[0])
  // const {name,age}=props.route.params[0]
  return (
    <View style={styles.main}>
      <Text>This is Home screen</Text>
      {/* <Text>Name:{age}</Text> */}

    </View>
  );
}
const Login = (props) => {
  const data = [
    { name: "ayesha", age: 20 }
  ]
  return (
    <View style={styles.main}>
      {/* // Pass data between Screens in Stack Navigation */}
      <View ><Button title='Go to Home' onPress={() => props.navigation.navigate("Home", data)}></Button></View>
      <View><Text>This is Login Screen</Text></View>
    </View>
  );
}
const MyStackNavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
          headerTitleStyle: { fontSize: 20 }
        }}
      >
        {/* style in header and add button in header */}
        <Stack.Screen name="Login" component={Login}
          options={{
            // title: 'Login Page',
            headerTitle: () => <Button title='left' />,
            headerRight: () => <TextInput placeholder='search' />,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'green' },
            headerTitleStyle: { fontSize: 20 }
          }}
        />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const MyTabNavigation = () => {
  return (
    // <View><Text>hello</Text></View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login}></Tab.Screen>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
//API call

const API = () => {
  const [data, setData] = useState(undefined)
  const [info, setInfo] = useState([])
  const getApiDataById = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1"

    let result = await fetch(url);
    result = await result.json()

    setData(result)
    // console.warn(data) 

  }

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    let result = await fetch(url)
    result = await result.json()
    setInfo(result)
  }

  useEffect(() => {
    getApiDataById();
    getApiData();
  }, [])

  return (
    <View>
      {data ?
        <View>
          <Text>{data.id}</Text>
          <Text>{data.userId}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View> : null
      }
      {
        info ?
          <FlatList
            data={info}
            renderItem={({ item }) =>
              <View style={styles.card}>
                <Text>{item.id}</Text>
                <Text>{item.userId}</Text>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            }
            keyExtractor={item => item.id}
          />
          : null
      }
      <ScrollView>
        {
          info ?
            info.map((data) =>
              <View style={styles.card}>
                <Text>{data.id}</Text>
                <Text>{data.userId}</Text>
                <Text>{data.title}</Text>
                <Text>{data.body}</Text>
              </View>
            )
            : null
        }
      </ScrollView>
    </View>
  );
}
const JsonServerApi = () => {
  const [getData, setgetDate] = useState();
  // const [userData,setUserData]=useState({});
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState('');
  const getApiData = async () => {
    const url = "http://192.168.100.10:3000/users";
    let result = await fetch(url);
    result = await result.json()
    setgetDate(result);
  }
  useEffect(() => {
    getApiData();
  }, [getData])

  // #52 Post api in React-native
  const setApiData = async () => {
    const newData = {
      name: "sana",
      age: 12,
      email: "sana@gmail.com"
    }
    const inputData = {
      name: name,
      age: age,
      email: email,
    }
    const url = "http://192.168.100.10:3000/users";
    let result = await fetch(url, {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      // body:JSON.stringify(newData)
      body: JSON.stringify(inputData)
    });
    result = await result.json()

  }
  return (
    <View>
      <TextInput style={styles.inputField} placeholder='enter name' onChangeText={(text) => setName(text)} />
      <TextInput style={styles.inputField} placeholder='enter age' onChangeText={(text) => setAge(text)} />
      <TextInput style={styles.inputField} placeholder='enter email id' onChangeText={(text) => setEmail(text)} />
      <Button title='call api' onPress={setApiData}></Button>
      <ScrollView>
        {
          getData ?
            getData.map((data) =>
              <View style={styles.card}>
                <Text>{data.id}</Text>
                <Text>{data.name}</Text>
                <Text>{data.age}</Text>
                <Text>{data.email}</Text>

              </View>
            )
            : null
        }
      </ScrollView>
    </View>
  );
}
const DeleteUpdateUser = () => {
  const [userId, setUserId] = useState()
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [user, getUser] = useState([])
  const [showModal, setShowModal] = useState(false)
  const getData = async () => {
    const url = "http://192.168.100.10:3000/users";
    let result = await fetch(url)
    result = await result.json()
    getUser(result)
  }
  useEffect(() => {
    getData()
  }, [user])

  const deleteData = async (id: String) => {
    const url = `http://192.168.100.10:3000/users/${id}`
    let result = await fetch(url, {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
    })
  }

  const updateData = async (id) => {
    const url = `http://192.168.100.10:3000/users/${id}`
    let result = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name, age
      })
    })
    setShowModal(false)
  }
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <View style={styles.userRow}>
        <Text style={{ flex: 0.8 }}>S.No.</Text>
        <Text style={{ flex: 1.5 }}>Name</Text>
        <Text style={{ flex: 0.5 }}>Age</Text>
        <Text style={{ flex: 2 }}>Action</Text>
      </View>
      {
        user ?
          user.map((item, index) =>
            <View key={item.id} style={styles.userRow}>
              <Text>{index + 1}</Text>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Button title="update" onPress={() => { setShowModal(true), setUserId(item.id) }}></Button>
              <Button title='delete' onPress={() => deleteData(item.id)}></Button>
            </View>
          ) : null
      }

      <Modal transparent={true} visible={showModal}>
        <View style={[styles.main, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
          <View style={{ backgroundColor: "yellow", width: 200 }}>
            <TextInput style={[styles.inputField, { backgroundColor: "white" }]} placeholder='Edit Name' onChangeText={(text) => setName(text)}></TextInput>
            <TextInput style={[styles.inputField, { backgroundColor: "white" }]} placeholder='Edit Age' onChangeText={(text) => setAge(text)}></TextInput>
            <View style={{ flexDirection: "row", margin: 15, justifyContent: "flex-end", gap: 10 }}>
              <Button title="Save" onPress={() => updateData(userId)}></Button>
              <Button title="Cancel" onPress={() => setShowModal(false)}></Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const SearchBar = () => {
  const searchUser = async (keyword) => {
    const url = `http://192.168.100.10:3000/users?q=${keyword}`;
    let result = await fetch(url)
    result = await result.json()
  }
  return (
    <View><TextInput style={styles.inputField} placeholder={'Enter Search Keyword'} onChangeText={(text) => searchUser(text)}></TextInput></View>
  );
}

const MyRef = () => {
  const input = useRef()
  const updateInput = () => {
    input.current.focus()
    input.current.setNativeProps({
      fontSize: 24,
      color: "red"
    })
  }
  return (
    <View>
      <TextInput ref={input} placeholder='enter me' style={styles.inputField}></TextInput>
      <TextInput placeholder='enter me' style={styles.inputField}></TextInput>
      <Button title='update' onPress={updateInput}></Button>
    </View>
  );
}

const MyAsyncStorage = () => {
  const [name, setName] = useState()
  const setData = async () => {
    await AsyncStorage.setItem("user", "Zaara")
  }
  const getData = async () => {
    const name = await AsyncStorage.getItem("user")
    setName(name)
  }
  const removeData = async () => {
    await AsyncStorage.removeItem("user")
    setName('')
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}> My name is {name}</Text>
      <Button title='set data' onPress={setData}></Button>
      <Button title='get data' onPress={getData}></Button>
      <Button title='remove data' onPress={removeData}></Button>
    </View>
  )
}
const MyRedux=()=>{
  const product=[
    {
      name:"Oppo 32432",
      detail:"this is loream ipsum do salt emapvpisu opra the ammubo",
      image:"https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg",
    },
    {
      name:"Samsung galxy 4645",
      detail:"this is loream ipsum do salt emapvpisu opra the ammubo",
      image:"https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg",
    },
    {
      name:"Vivo 904832",
      detail:"this is loream ipsum do salt emapvpisu opra the ammubo",
      image:"https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg",
    },
    {
      name:"Redmi 9Casd",
      detail:"this is loream ipsum do salt emapvpisu opra the ammubo",
      image:"https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg",
    },
    {
      name:"Real me 543",
      detail:"this is loream ipsum do salt emapvpisu opra the ammubo",
      image:"https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg",
    }
  ] 
  return(
    <View>
      <Header/>
      <ScrollView>
      {
        product.map((item)=>
        <Product product={item}/>
        )
      }
      </ScrollView>
    </View>
  );
}


const ReduxNavigation=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Gadget' component={Gadget}></Stack.Screen>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
  },
  warn: {
    backgroundColor: "red",
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color: "white",
    fontSize: 20,
    elevation: 20,
    shadowColor: "black",
    shadowOpacity: 1
  },
  radioBtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBtnText: {
    fontSize: 20,
    color: "lightblue"
  },
  radioBtn: {
    borderWidth: 2,
    margin: 10,
    width: 40,
    height: 40,
    borderColor: "lightblue",
    borderRadius: 20
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  radioBg: { borderRadius: 15, backgroundColor: "lightblue", width: 30, height: 30, margin: 3 }
  , platform: {
    color: Platform.OS == 'android' ? 'blue' : 'orange',
  },
  card: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  userRow: {
    alignItems: "baseline",
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "yellow",
    justifyContent: "space-around",
    padding: 10
  }
})
export default App;