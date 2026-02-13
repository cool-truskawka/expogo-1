import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Pressable } from 'react-native';
import { Image } from 'react-native';

type Props = {
    imageSource: any;
}

export default function CircleButtonMain({ imageSource }: Props) {
    return (
        <View style={styles.roundButtonContainer}>
            <Pressable style={styles.roundButton} onPress={() => alert('Circle Button Pressed!')}>
                <Image style={styles.roundImage} source={imageSource} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    roundButtonContainer: {
        width: 80,
        height: 80,
        color: '#33ff00',
        borderColor: '#33ff00',
        borderWidth: 2,
        borderRadius: 40,
        overflow: 'hidden',
        marginTop: 10,
    },
    roundButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    roundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});