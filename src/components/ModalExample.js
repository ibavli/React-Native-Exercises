import React, { Component } from 'react';
import { View, Modal, Alert, Text, TouchableHighlight, Button } from "react-native";


export default class ModalExample extends Component {

    state = {
        modalVisible: false,
        modalText: "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22, backgroundColor: "gray" }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed!");
                    }}>

                    <View style={{ marginTop: 22 }}>
                        <View>

                            <Text style={{ backgroundColor: "antiquewhite ", padding: 15 }}>{this.state.modalText}</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Button
                                    title="Close Modal"
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                />
                            </TouchableHighlight>
                        </View>
                    </View>

                </Modal>

                <Button
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                    title="Show Modal"
                    style={{ padding: 15 }}
                />
            </View>
        );
    }
}