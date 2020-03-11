import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';


export default class PickerExample extends Component {

    state = {
        username: 'admin'
    };

    updateSelectedUsername = (username) => {
        this.setState({ username: username });
    }

    getMessage = () => {
        return `Seçtiğiniz username: ${this.state.username}`;
    }

    render() {
        return (
            <View>
                <Picker
                selectedValue={this.state.username}
                onValueChange={this.updateSelectedUsername}
                style={styles.pickerStyle}>
                    <Picker.Item label="Admin" value="admin" />
                    <Picker.Item label="TestUser" value="testuser" />
                </Picker>
                <Text style={styles.text}>{this.getMessage()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        margin:50,
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    },

    pickerStyle: {
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15
    }
})