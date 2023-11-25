import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function SegmentThree() {
  const website = function (website, string) {
    Linking.openURL(website);
  };
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Trending Place</Text>
      <View style={styles.mincont}>
        <Image
          source={{
            uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/e3/4b/img-20180921-184349-largejpg.jpg?w=1200&h=-1&s=1',
          }}
          style={styles.imagestyle}
        />
        <View>
          <View style={styles.Htext}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.google.com/maps/place/Jaipur,+Rajasthan/@26.8851151,75.6257468,11z/data=!3m1!4b1!4m6!3m5!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy?entry=ttu',
                );
              }}>
              <Text style={styles.location}>↪Location Jaipur</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://www.insightvacations.com/blog/story-jaipur-pink-city/',
                );
              }}>
              <Text style={styles.distance}>• Pink City</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.descrip}>
            Description:{'\n'}
            This is the one of the most place to visin in india. Main
            attractions of Jaipur is Rani Mahal , Hawa Mahal and lot
            <View>
              <TouchableOpacity
                onPress={() =>
                  website('https://www.fabhotels.com/blog/hawa-mahal-jaipur/')
                }>
                <Text>more...</Text>
              </TouchableOpacity>
            </View>
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
    marginTop:10,
    backgroundColor: '#265073',
    borderRadius: 6,
    flex: 1,
    alignItems: 'stretch',
    elevation: 4,
    shadowOffset: {
      width: 6,
      height: 1,
    },
    shadowColor: {
      shadowColor: 'black',
    },
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    elevation: 4,
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
    fontSize: 13,
    color: '#ECF4D6',
    fontWeight: '400',
    paddingTop: 5,
    paddingEnd: 6,
  },
  descrip: {
    paddingHorizontal: 6,
    paddingTop: 8,
    paddingBottom: 12,
    color: '#ECF4D6',
  },
});
