import React, { Component } from "react";
import { View, StyleSheet, ProgressBarAndroid } from "react-native";

function Seperator() {
    return <View style={styles.seperator} />;
}

export default class ProgressBarAndroidExample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ProgressBarAndroid />
                <Seperator />
                <ProgressBarAndroid styleAttr="Horizontal" />
                <Seperator />
                <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.2}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 10,
    },

    seperator: {
        marginVertical: 50,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});