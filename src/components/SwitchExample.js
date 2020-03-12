import React, { Component } from 'react'
import { View, Switch, StyleSheet, Alert } from 'react-native'

export default class SwitchExample extends Component {
    constructor() {
        super();
        this.state = {
            switch1Value: false,
        }
    }
    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        Alert.alert('Switch 1 is: ' + value)
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Switch
                        onValueChange={this.toggleSwitch1}
                        value={this.state.switch1Value} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       marginTop: 100
    }
 })