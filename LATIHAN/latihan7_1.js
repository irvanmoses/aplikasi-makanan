import React, {Component} from 'react';
import {
  SafeAreaView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class latihan7_1 extends Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
      time: new Date(),
    };
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({time: new Date(), refreshing: false});
    }, 3000);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.onRefresh()}
            />
          }>
          <View>
            <Text style={{fontSize: 21, textAlign: 'center'}}>
              {this.state.time.toString()}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
