import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SegmentOne() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Upper Menu </Text>
        <View style={styles.mimicont}>
          <View style={[styles.box, styles.red]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.box, styles.grey]}>
            <Text>Grey</Text>
          </View>
          <View style={[styles.box, styles.yellow]}>
            <Text>Yellow</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 4,
    padding: 6,
  },
  mimicont: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    gap: 8,
  },
  box: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  red: {
    backgroundColor: 'red',
  },
  grey: {
    backgroundColor: 'grey',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
    elevation: 4,
  },
});
