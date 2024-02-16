import { PixelRatio, StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>CaloTrak</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: 'white',
        fontSize: 20 * PixelRatio.getFontScale(),
    },
    headerWrapper: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        backgroundColor: 'royalblue',
        padding: 10 * PixelRatio.getFontScale(),
    },
});