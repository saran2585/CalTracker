import { StatusBar, StyleSheet, View } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;
const appBarHeight = 22;

export default function AppBar() {
    return (
        <>
            <StatusBar backgroundColor={'royalblue'} translucent={true} />
            <View style={styles.appBar} />
        </>
    );
}

const styles = StyleSheet.create ({
    statusbar: {
        backgroundColor: 'royalblue',
        height: statusBarHeight,
    },
    appBar: {
        backgroundColor: 'royalblue',
        height: appBarHeight,
    }
});