import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ContactList from "../components/ContactList";
import {loadCharacters} from "../repository/SampleRepository";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View>
    </View>
  );
}
