import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { SearchBar } from '../../components';
import Colors from '../../config/Theme';
import customData from '../../data/Uras.json';
import styles from '../global';

export default function Uras() {
  const renderItem = ({ item }) => (
    <View style={styles.Container}>
      <Text>
        <Icon name="chrome-reader-mode" size={15} color={Colors.primary} />
        Ura: {item.Sigla}
      </Text>
      <Text>GER: {item.ger}</Text>
      <Text>GRAM: {item.gram}</Text>
      <Text>GRA: {item.gra}</Text>
      <Text>UF: {item.uf}</Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(`http://maps.google.com/maps?daddr=${item.endereco}`)
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
      Data={customData.Uras}
      renderItem={renderItem}
      placeholder="Buscar pela Ura..."
    />
  );
}
