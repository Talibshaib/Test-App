import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SegmentTwo = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <Text style={styles.text}>Scroll Menu</Text>
        <View style={styles.minicont}>
          <View style={styles.box}>
            <Text>let's</Text>
          </View>
          <View style={styles.box}>
            <Text>Do</Text>
          </View>
          <View style={styles.box}>
            <Text>Something</Text>
          </View>
          <View style={styles.box}>
            <Text>New</Text>
          </View>
          <View style={styles.box}>
            <Text>....</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SegmentTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 4,
    padding: 6,
  },
  box: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F0DBAF',
    elevation: 4,
    shadowOffset: {
      width: 8,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  minicont: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
});
