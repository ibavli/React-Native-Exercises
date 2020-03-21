import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Text } from "react-native";

// function func2(){
//     console.log(this);
// }

// x = {
//     func: function(){
//         console.log(this);
//     }
// }

// x.func()
// func2()


export default class UserTextExample extends Component {

    constructor(){
        super();
        this.state = {
            value: "Edit me!"
        }
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText(newText){
        this.setState({
            value: newText
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    defaultValue = {this.state.value}
                    onChangeText={this.handleChangeText}
                 />
                 <Text>You writing <Text style={styles.inputText}>{this.state.value}</Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        padding:20
    },

    inputText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "red"
    }

});