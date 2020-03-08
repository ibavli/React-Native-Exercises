import React, { Component } from 'react'
import { View, Button, StyleSheet, Text, Alert } from "react-native";

function Separator() {
    return <View style={styles.separator} />;
}

export default class ButtonExample extends Component {

    state = {
        buttonName: "Click me!",
        textDescription: ''
    }

    changeName = () => {
        this.setState({
            buttonName: 'New Button Name'
        })
    }

    showDescription = () => {
        this.setState({
            textDescription: 'Surpise !'
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <Button
                    onPress={() => this.changeName()}
                    title={this.state.buttonName}
                    color="#f194ff" />

                <Separator />

                <Button
                    onPress={() => this.showDescription()}
                    title='Click me!' />

                <Separator />

                <Text style={styles.text}>
                    {this.state.textDescription}
                </Text>

                <Separator />

                <Button
                    onPress={() => this.showDescription()}
                    disabled
                    title='Disabled button' />

                <Separator />

                <View style={styles.fixToText}>
                    <Button
                        title="Left button"
                        onPress={() => Alert.alert('Alert Title','Left button pressed')}
                    />
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Alert Title','Right button pressed')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        margin: 15
    },

    separator: {
        marginVertical: 20,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#33B8FF'
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});