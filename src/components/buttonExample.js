import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Alert, SafeAreaView } from 'react-native'

export default class ButtonExample extends Component{

    componentDidMount(){
        //Alert.alert('Alert Title','component opened')
    }

    state = {
        count: 0,
        emre: 'button name'
    }

    arttir = () =>{
        this.setState({
            emre: 'new name'
        })
    }

    render(){
        return(
            <>
            <SafeAreaView style={styles.container}>
                <Button
                onPress={() => this.arttir()}
                style={styles.buttonStyle}
                title={this.state.emre} />
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        margin:15
    },

    buttonStyle:{
        backgroundColor: '#f194ff'
    }
})
