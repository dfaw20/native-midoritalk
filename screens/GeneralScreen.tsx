import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ContactList from "../components/ContactList";
import {loadCharacters} from "../repository/Repository";

export default function GeneralScreen({ navigation }: RootTabScreenProps<'General'>) {
  return (
    <View>
    </View>
  );
}
