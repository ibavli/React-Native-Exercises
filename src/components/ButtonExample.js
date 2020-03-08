import React, { Component } from 'react'
import { View, Button, StyleSheet } from "react-native";


export default class ButtonExample extends Component {

    state = {
        buttonName: "Click me!"
    }

    changeName = () => {
        this.setState({
            buttonName: 'New Button Name'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.changeName()}
                    title={this.state.buttonName}
                    color="#f194ff" />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        margin: 15
    },

})