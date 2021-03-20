import { StyleSheet } from 'react-native';

import Colors from './config/Theme';

export default StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 2,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    backgroundColor: Colors.background,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
});