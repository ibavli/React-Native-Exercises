
import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ActivityIndicatorExample from './src/components/ActivityIndicatorExample';
import ButtonExample from './src/components/ButtonExample';
import ImageExample from './src/components/ImageExample';
import ModalExample from './src/components/ModalExample';
import PickerExample from './src/components/PickerExample';
import ProgressBarAndroidExample from './src/components/ProgressBarAndroidExample';
import RefreshControlExample from './src/components/RefreshControlExample';

export default class App extends Component {
  render() {
    return (
      <>
        {/* <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <ActivityIndicatorExample/> 
             <ButtonExample/>
             <ImageExample/>
            <ModalExample/>

          </ScrollView>
        </SafeAreaView> */}

        {/* <ActivityIndicatorExample />
        <ButtonExample />
        <ImageExample /> */}
        {/* <ModalExample /> */}
        {/* <PickerExample/> */}
        {/* <ProgressBarAndroidExample/> */}
        <RefreshControlExample/>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
