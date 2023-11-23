import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SegmentThree() {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Trending Menu</Text>
      <View style={styles.mincont}>
        <Image
          source={{
            uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/e3/4b/img-20180921-184349-largejpg.jpg?w=1200&h=-1&s=1',
          }}
          style={styles.imagestyle}
        />
        <View>
          <View style={styles.Htext}>
            <Text style={styles.location}>↪Location Jaipur</Text>
            <Text style={styles.distance}>
              • This is 4 km away from Location
            </Text>
          </View>
          <Text style={styles.descrip}>
            Description:{'\n'}
            This is the one of the most place to visin in india. Main
            attractions of Jaipur is Rani Mahal , Hawa Mahal and lot more...
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 4,
    padding: 6,
  },
  mincont: {
    backgroundColor: '#265073',
    borderRadius: 6,
    flex: 1,
    alignItems: 'stretch',
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  imagestyle: {
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  Htext: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingTop: 4,
  },
  location: {
    fontSize: 18,
    color: '#ECF4D6',
    fontWeight: '600',
  },
  distance: {
    fontSize: 12,
    color: '#ECF4D6',
    fontWeight: '400',
    paddingTop: 5,
  },
  descrip: {
    paddingHorizontal: 6,
    paddingTop: 8,
    paddingBottom: 12,
    color: '#ECF4D6',
  },
});
