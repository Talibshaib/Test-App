import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

export default function SegmentFive() {
  const contacts = [
    {
      uid: 1,
      name: 'Talib',
      status: 'Focusing and Exploring',
      usrimg: 'https://avatars.githubusercontent.com/u/92061094?v=4',
      URL: 'https://github.com/Talibshaib',
    },
    {
      uid: 2,
      name: 'Manish',
      status: 'Focusing and Learning',
      usrimg: 'https://avatars.githubusercontent.com/u/148362870?v=4',
      URL: 'https://github.com/itzMnaish',
    },
    {
      uid: 3,
      name: 'Prince',
      status: 'Coding and Clearing sem',
      usrimg: 'https://avatars.githubusercontent.com/u/96430904?v=4',
      URL: 'https://github.com/legcy143',
    },
    {
      uid: 4,
      name: 'Harry',
      status: 'Making videos',
      usrimg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPF3ZCIz2Lmrke1_U9URMfQ9SWnOw3FspLw&usqp=CAU',
      URL: 'https://github.com/hiteshchoudhary',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Our great community</Text>
      <ScrollView horizontal>
        {contacts.map(({name, status, usrimg, uid, URL}) => (
          <View key={uid} style={[styles.cart]}>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL(URL)}>
                <Image
                  source={{
                    uri: usrimg,
                  }}
                  style={styles.Image}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.nscont}>
              <Text style={styles.arrname}>{name}</Text>
              <Text style={styles.arrstatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 6,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    elevation: 4,
  },
  arrname: {
    color: '#265073',
  },
  arrstatus: {
    color: '#265073',
  },
  cart: {
    flexDirection: 'row',
    backgroundColor: '#ECF4D6',
    width: 250,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    marginTop: 10,
    marginBottom: 10,
    gap: 3,
    // justifyContent:'center'
    alignItems: 'center',
  },
  Image: {
    height: 60,
    width: 60,
    borderRadius: 8,
    marginRight: 8,
  },
  nscont: {
    justifyContent: 'center',
    gap: 2,
  },
});
