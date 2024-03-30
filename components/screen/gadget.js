import React from "react";
import {View,ScrollView} from 'react-native';
import Header from "../Header";
import Product from "../Product";

const Gadget=()=>{
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
export default Gadget