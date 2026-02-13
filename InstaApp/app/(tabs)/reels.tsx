import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';

export default function ReelsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Reels Screen.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});