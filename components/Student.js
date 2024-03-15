import React,{Component} from "react"
import { View, Text } from "react-native"

class Student extends Component {
  render() {
    return (
      <View>
        <Text>Hello this Student class {this.props.name}</Text>
      </View>
    )
  }
}

export default Student;