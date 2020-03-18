import React, { Component } from "react";
import { Text, StyleSheet, Alert } from "react-native";


export default class TextExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        }
    }

    onPressTitle(){
        Alert.alert("test");
    }

    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                    {this.state.titleText}{'\n'}{'\n'}
                </Text>
                <Text numberOfLines={5} dataDetectorType="phoneNumber"> 
                    {this.state.bodyText}
                </Text>
            </Text>
        )
    }
}


const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
        marginVertical: 20
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});