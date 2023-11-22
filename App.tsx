import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import SegmentOne from './src/component/SegmentOne';
import SegmentTwo from './src/component/SegmentTwo';

function App() {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <SegmentOne />
          <SegmentTwo />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default App;
