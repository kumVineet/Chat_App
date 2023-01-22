import {Dimensions, Platform} from 'react-native';
import normalize from 'react-native-normalize';
import Colors from '../utils/Colors';

let headerHeight = Platform.OS === 'ios' ? normalize(66) : normalize(46);
let footerHeight = normalize(55);

const Constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  viewPadding: normalize(15),
  defaultSpacer: normalize(10),
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  divider: {backgroundColor: Colors.smoke},
};
export default Constants;
