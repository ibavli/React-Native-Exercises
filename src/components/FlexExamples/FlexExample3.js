import React, { Component } from 'react'
import { View, StyleSheet } from "react-native";

export default class FlexExample3 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.half1}>

                </View>
                <View style={styles.half2}>
                    <View style={styles.half21}>

                    </View>
                    <View style={styles.half22}>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: "row"
    },

    half1: {
        flex: 1,
        backgroundColor: "red"
    },

    half2: {
        flex: 1,
        backgroundColor: "blue",
        flexDirection: "row"
    },

    half21: {
        flex: 2,
        backgroundColor: "green"
    },

    half22: {
        flex: 1,
        backgroundColor: "yellow"
    }

});