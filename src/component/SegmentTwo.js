import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SegmentTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Catogeries</Text>
      <ScrollView horizontal>
        <View style={styles.minicont}>
          <View style={styles.box}>
            <Text style={styles.btext}>All</Text>
          </View>
          <View style={[styles.box]}>
            <Text style={styles.btext}>Mountains</Text>
          </View>
          <View style={[styles.box]}>
            <Text style={styles.btext}>Lake</Text>
          </View>
          <View style={[styles.box]}>
            <Text style={styles.btext}>Desert</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SegmentTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    padding: 6,
  },
  box: {
    marginTop: 18,
    // flex: 1,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#265073',
  },
  minicont: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    elevation: 4,
  },
  btext: {
    color: '#ECF4D6',
  },
});
