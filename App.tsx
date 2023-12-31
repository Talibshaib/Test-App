import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import SegmentOne from './src/component/SegmentOne';
import SegmentTwo from './src/component/SegmentTwo';
import SegmentThree from './src/component/SegmentThree';
import SegmentFour from './src/component/SegmentFour';
import NavMenu from './src/component/NavMenu';
import SegmentFive from './src/component/SegmentFive';

function App() {
  return (
    <View style={styles.body}>
      <SafeAreaView>
        <ScrollView>
          <NavMenu />
          <SegmentOne />
          <SegmentTwo />
          <SegmentThree />
          <SegmentFour />
          <SegmentFive />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
});

export default App;
