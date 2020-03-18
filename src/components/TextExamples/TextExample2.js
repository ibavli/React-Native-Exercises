import React, { Component } from "react";
import { Text } from "react-native";


export default class TextExample2 extends Component {
    render() {
        return (
            <Text style={{ fontWeight: 'bold' }}>
                I am bold
                <Text style={{ color: 'red' }}>
                    and red
                </Text>
            </Text>
        )
    }
}