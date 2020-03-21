import React, { Component } from 'react'
import { View, StyleSheet } from "react-native";

export default class FlexExample4 extends Component {

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.menu}>
               
               </View>
               <View style={styles.body}>
                   <View style={styles.bodyContainer}>
                        <View style={styles.left}>

                        </View>
                        <View style={styles.center}>

                        </View>
                        <View style={styles.right}>

                        </View>
                   </View>
               </View>
               <View style={styles.footer}>
               
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

    menu: {
        flex: 1,
        backgroundColor: "red"
    },
    
    body: {
        flex: 8,
        backgroundColor: "blue"
    },

    bodyContainer: {
        flex: 8,
        backgroundColor:"green",
        flexDirection: "row"
    },

    left: {
        flex: 1,
        backgroundColor: "purple",
        flexDirection: "row"
    },

    center: {
        flex: 5,
        backgroundColor: "gray",
        flexDirection: "row"
    },

    right: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row"
    },

    footer: {
        flex: 1,
        backgroundColor: "green"
    }

});