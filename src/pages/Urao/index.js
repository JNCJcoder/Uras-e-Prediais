import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { SearchBar } from '../../components';
import Colors from '../../config/Theme';
import customData from '../../data/Uraos.json';
import styles from '../../globalStyle';

export default function Urao() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>
        <Icon name="chrome-reader-mode" size={15} color={Colors.primary} />
        Ura: {item.Sigla}
      </Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(`http://maps.google.com/maps?daddr=${item.Endereco}`)
        }>
        <Text>
          <Icon name="room" size={15} color={Colors.primary} />
          Endereço: {item.Endereco}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SearchBar
      Data={customData.Urao}
      renderItem={renderItem}
      placeholder="Buscar pelo Urao..."
    />
  );
}
