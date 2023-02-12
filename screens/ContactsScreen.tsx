import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ContactList from "../components/ContactList";
import {loadCharacters} from "../repository/LocalRepository";

export default function ContactsScreen({ navigation }: RootTabScreenProps<'Contacts'>) {
  return (
    <View style={styles.container}>
      <ContactList characters={loadCharacters()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
