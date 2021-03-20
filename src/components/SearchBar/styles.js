import { StyleSheet } from 'react-native';

import Colors from '../../config/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: "#eee"
  },
  searchInput: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.background,
    color: Colors.searchText,
    borderRadius: 25,
    paddingLeft: 60,
    fontSize: 16,
  },
  searchButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  flatlist: {
    paddingTop: 5,
  },
}); 