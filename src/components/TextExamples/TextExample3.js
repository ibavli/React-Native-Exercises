import React, { Component } from "react";
import { Text, View } from "react-native";


export default class TextExample3 extends Component {
    render() {
        return (
            // <Text>
            //     <Text>First part and </Text>
            //     <Text>second part</Text>
            // </Text>


            <View>
                <Text>First part and </Text>
                <Text>second part</Text>
            </View>
        )
    }
}