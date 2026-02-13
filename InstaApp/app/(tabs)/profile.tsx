import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import { useFonts, PlaywriteCU_400Regular } from '@expo-google-fonts/playwrite-cu';

export default function ProfileScreen() {
  const fontsLoaded = useFonts({
    PlaywriteCU: PlaywriteCU_400Regular,
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: 'PlaywriteCU' }]}>This is the Profile Screen.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // occupy the full free space
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flexWrap: 'wrap',
    color: '#f00e0e',
    fontSize: 55
  },
});