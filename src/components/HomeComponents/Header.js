import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// contants
import color_dark from '../../constants/color_dark.json';
import {data} from '../../constants/data';
import {commonStyles} from '../../constants/commanStyles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <View>
          <Text style={commonStyles.headerText}>Mark Price</Text>
          <Text style={commonStyles.headerTextValues}>{data.markPrice}</Text>
        </View>

        <View>
          <Text style={commonStyles.headerText}>Index Price</Text>
          <Text style={commonStyles.headerTextValues}>{data.indePrice}</Text>
        </View>

        <View>
          <Text style={commonStyles.headerText}>Funding/Countdown</Text>
          <Text style={commonStyles.headerTextValues}>
            {data.fundingCountDown}
          </Text>
        </View>

        <View>
          <Text style={commonStyles.headerText}>24h Change</Text>
          <Text style={commonStyles.headerTextValues}>{data.Change}</Text>
        </View>
      </View>

      <View style={styles.contentView}>
        <View>
          <Text style={commonStyles.headerText}>24H High</Text>
          <Text style={commonStyles.headerTextValues}>{data.high}</Text>
        </View>

        <View>
          <Text style={commonStyles.headerText}>24H Low</Text>
          <Text style={commonStyles.headerTextValues}>{data.low}</Text>
        </View>

        <View>
          <Text style={commonStyles.headerText}>24H Vol(USDT)</Text>
          <Text style={commonStyles.headerTextValues}>{data.vol}</Text>
        </View>

        <View>
          <Text style={commonStyles.headerText}>Open Interest</Text>
          <Text style={commonStyles.headerTextValues}>{data.openInterest}</Text>
        </View>
      </View>

      <View style={commonStyles.underLine} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: color_dark.black,
    // backgroundColor: 'red',
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    padding: 3,
  },
});
