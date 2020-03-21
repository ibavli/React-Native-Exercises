
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
import ScrollViewExample from './src/components/ScrollViewExample';
import SectionListExample from './src/components/SectionListExample';
import SwitchExample from './src/components/SwitchExample';
import TextExample from './src/components/TextExamples/TextExample';
import TextExample2 from './src/components/TextExamples/TextExample2';
import TextExample3 from './src/components/TextExamples/TextExample3';
import TextInputExample from './src/components/TextInputExample';
import TouchableHighlightExample from './src/components/TouchableHighlightExample';
import PropsExample from './src/components/PropsExample/PropsExample';
import FlexExample1 from './src/components/FlexExamples/FlexExample1';
import FlexExample2 from './src/components/FlexExamples/FlexExample2';
import ListAndHttpExample from './src/components/ListAndHttpExample';
import FlexExample3 from './src/components/FlexExamples/FlexExample3';
import FlexExample4 from './src/components/FlexExamples/FlexExample4';

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
        {/* <RefreshControlExample/> */}
        {/* <ScrollViewExample/> */}
        {/* <SectionListExample/> */}
        {/* <SwitchExample/> */}
        {/* <TextExample/> */}
        {/* <TextExample2/> */}
        {/* <TextExample3/> */}
        {/* <TextInputExample/> */}
        {/* <TouchableHighlightExample/> */}
        {/* <PropsExample/> */}
        {/* <FlexExample1/> */}
        {/* <FlexExample2/> */}
        {/* <ListAndHttpExample/> */}
        {/* <FlexExample3/> */}
        <FlexExample4/>

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
