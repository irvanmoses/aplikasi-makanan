import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';

export default class latihan7_1 extends Component {
  constructor() {
    super();
    this.state = {
      hasMore: true,
      data: [1, 2, 3, 4, 5],
      refreshing: false,
    };
  }

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 50
    );
  };

  getMoreData() {
    let data = this.state.data;
    let n = data[data.length - 1];
    for (let i = n + 1; i <= n + 5; i++) {
      data.push(i);
    }
    this.setState({data: data});
  }

  onRefresh() {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({
        refreshing: false,
        data: [1, 2, 3, 4, 5],
      });
    }, 3000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.onRefresh()}
            />
          }
          onScroll={({nativeEvent}) => {
            if (this.isCloseToBottom(nativeEvent) && this.state.hasMore) {
              this.getMoreData();
            }
          }}>
          {this.state.data.map((item, index) => (
            <View
              key={index}
              style={[
                {backgroundColor: index % 2 ? 'blueviolet' : 'coral'},
                styles.list,
              ]}>
              <Text style={{fontSize: 28, color: 'white'}}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
});
