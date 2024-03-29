import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Registra un usuario para empezar a guardar tus pokemons favoritos
      </Text>
      <Button title='Login' onPress={() => navigation.navigate('Account')} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
});
