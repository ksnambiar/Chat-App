import React, { Component } from 'react';
import { View, Text , StyleSheet , TextInput ,TouchableOpacity } from 'react-native';
import {Actions} from "react-native-router-flux"
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:''
    };
    this.onChangeName = this.onChangeName.bind(this)
  }
  onChangeName(name){
      this.setState({name:name})
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.title}> Enter your Name here </Text>
        
        <TextInput
        style={styles.nameInput}
        placeholder="enter name"
        onChangeText={(name)=>this.onChangeName(name)}
        value={this.state.name}
        />

        <TouchableOpacity 
        onPress={ ()=>{
            Actions.chat({
                name1:this.state.name
            })
        }} 
        >
        <Text style={styles.buttonStyle}>
        Submit
        </Text>
        </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    title:{
        marginTop:20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput:{
        height:40,
        borderColor: 'black',
        borderWidth: 2,
        margin:20,
        padding: 5
    },
    buttonStyle:{
        marginLeft:20,
        fontSize:20
    },
    containerStyle:{
        backgroundColor: "white",
        borderColor: "gray",
        borderRadius: 3,
        marginHorizontal: 10,
        marginTop:15
    }
})