import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const PresentationalComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text onPress={props.updateState} style={styles.myState}>
                {props.myState}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:15
    },

    myState:{
        marginTop: 20,
        textAlign: "center",
        color: "blue",
        fontSize: 18
    }
})

export default PresentationalComponent