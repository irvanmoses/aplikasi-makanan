import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    padding: 10,
  },
  card: {
    borderRadius: 5,
    borderColor: '#eee',
    borderBottomWidth: 0,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  card_header: {
    padding: 5,
    height: 60,
    flexDirection: 'column',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  date: {
    color: '#fd7e14',
    fontSize: 12,
  },
  card_body: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#eee',
  },
  text_body: {
    fontSize: 14,
  },
  card_footer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 35,
    overflow: 'hidden',
    margin: 0,
  },
});

export default class latihan2_1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.title}> Google News </Text>
            <Text style={styles.date}> March 13, 2019, 13:00</Text>
          </View>
          <View style={styles.card_body}>
            <Text style={styles.text_body}>
              Google News is a news aggregator and app developed by Google. It
              presents a continuous, customizable flow of articles organized
              from thousands of publishers and magazines. Google News is
              available on Android, iOS, and the web. A beta version was
              launched in September 2002, and released officially in January
              2006.
            </Text>
          </View>
          <View style={styles.card_footer}>
            <Button title="Share!" color="#dc3545" />
          </View>
        </View>
      </View>
    );
  }
}
