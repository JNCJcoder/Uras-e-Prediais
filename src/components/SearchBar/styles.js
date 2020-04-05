import { StyleSheet } from 'react-native';

import Colors from '../../config/Theme';

export default StyleSheet.create({
  FlatList: {
    paddingLeft: 10,
  },
  searchForm: {
    marginBottom: 20,
    top: 15,
    left: 10,
    right: 20,
  },
  searchInput: {
    height: 50,
    width: '95%',
    backgroundColor: Colors.background,
    color: Colors.searchText,
    borderRadius: 25,
    paddingLeft: 60,
    fontSize: 16,
  },
  searchButton: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
