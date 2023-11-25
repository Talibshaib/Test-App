import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';

export default function SegmentOne() {
  return (
    // make it better
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Where do {'\n'}you want to Go?</Text>
      </View>

      <View>
        <TextInput
          style={styles.intext}
          placeholderTextColor={'#265073'}
          placeholder="Search For Places ..."></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 6,
  },

  text: {
    marginTop: 4,
    color: '#2D9596',
    fontSize: 32,
    fontWeight:'500',
    elevation:4,
  },
  intext: {
    marginTop: 24,
    padding:10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2D9596',
    color: 'black',
    // elevation:4,

  },
});
