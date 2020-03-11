import React, { Component } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Text,
    View,
    Alert,
    RefreshControl,
  } from 'react-native';

export default class RefreshControlExample extends Component{
    constructor(props) {
        super(props);
        this.state = { refreshing: true };
        this.GetData();
      }
    
      GetData = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              refreshing: false,
              dataSource: responseJson
            });
          })
          .catch(error => {
            console.error(error);
          });
      };
      ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: 0.2,
              width: '80%',
              backgroundColor: '#808080',
            }}
          />
        );
      };
      onRefresh() {
        this.setState({ dataSource: [] });
        this.GetData();
      }
      render() {
        if (this.state.refreshing) {
          return (
            <View style={{ flex: 1,  backgroundColor: "#C2185B", paddingTop: 20 }}>
            <Text style={{ fontSize: 50, textAlignVertical: "center", textAlign: "center"}}> he he he!</Text>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          );
        }

        return (
          <View style={styles.MainContainer}>
            <FlatList
              data={this.state.dataSource}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              enableEmptySections={true}
              renderItem={({item}) => (
                <Text
                  style={styles.rowViewContainer}
                  onPress={() => alert(item.id)}>
                  {item.title}
                </Text>
              )}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh.bind(this)}
                />
              }
            />
          </View>
        );
      }
    }


    const styles = StyleSheet.create({
      MainContainer: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
      },
      rowViewContainer: {
        fontSize: 20,
        padding: 10,
      },
    });