import { StyleSheet } from 'react-native';

import Colors from '../config/Theme';

export default StyleSheet.create({
  Container: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 15,
    marginBottom: 5,
    maxWidth: 330,
    shadowColor: Colors.primary,
    backgroundColor: Colors.background,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
});
