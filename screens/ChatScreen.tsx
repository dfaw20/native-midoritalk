import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import i18nSetup from "../translation/TranslateSetup";
import {toText} from "../util/ViewUtil";
import i18next from "i18next";

i18nSetup().then(() => {})

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{toText(i18next.t('chat'))}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ChatScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
