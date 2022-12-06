import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
// components
import ChartHeader from '../../../../components/HomeComponents/ChartHeader';
import {createChart} from 'lightweight-charts';
import {commonStyles} from '../../../../constants/commanStyles';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000},
  {quarter: 5, earnings: 13000},
  {quarter: 6, earnings: 16500},
  {quarter: 7, earnings: 14250},
  {quarter: 8, earnings: 19000},
  {quarter: 9, earnings: 13000},
  {quarter: 10, earnings: 16500},
  {quarter: 11, earnings: 14250},
  {quarter: 12, earnings: 19000},
];

const Chart = () => {
  return (
    <View style={commonStyles.container}>
      {/* <Text style={commonStyles.text}>Chart</Text> */}
      <VictoryChart animate={true} width={400} theme={VictoryTheme.material}>
        <VictoryBar animate={true} data={data} x="quarter" y="earnings" />
      </VictoryChart>
      {/* <ChartHeader /> */}
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
