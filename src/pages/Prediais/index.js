import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { SearchBar } from '../../components';
import Colors from '../../config/Theme';
import customData from '../../data/Prediais.json';
import styles from '../global';

export default function Prediais() {
  const renderItem = ({ item }) => (
    <View style={styles.Container}>
      <Text>
        Predial: {item.NomeDaEstacao} ( {item.Sigla} )
      </Text>
      <Text>Localidade: {item.Localidade}</Text>
      <Text>Município: {item.NomeMunicipio}</Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            `http://maps.google.com/maps?daddr=${item.Endereco} ${item.Localidade} ${item.NomeMunicipio}`,
          )
        }>
        <Text>
          Endereço: {item.Endereco}
          <Icon name="room" size={15} color={Colors.primary} />
        </Text>
      </TouchableOpacity>
      <Text>Localização Capital/Interior: {item.Lci ? item.Lci : '???'}</Text>
    </View>
  );

  return (
    <SearchBar
      Data={customData.Estacoes}
      renderItem={renderItem}
      placeholder="Buscar pela Sigla..."
    />
  );
}
