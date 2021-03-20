import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SearchBar = ({ Data, renderItem, placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [Station, setStation] = useState([]);

  const FilterStation = () => {
    return Data.filter(({ Sigla }) => Sigla.includes(searchInput));
  };

  useEffect(() => setStation(FilterStation()), [searchInput]);

  return (
    <View style={styles.container}>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          placeholderTextColor="#999"
          autoCapitalize="characters"
          autoCorrect={false}
          returnKeyType="search"
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <View style={styles.searchButton}>
          <Icon name="search" size={21} color="#FFF" />
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={Station}
        keyExtractor={({ Sigla }) => Sigla}
        renderItem={renderItem}
        initialNumToRender={5}
      />
    </View>
  );
};

export default SearchBar;