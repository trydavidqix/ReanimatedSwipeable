import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 24,
        marginTop: 50,
    },
    content: {
        gap: 14,
    },
    rightActions: {
        flexDirection: 'row',
    },
    reanimatedSwipeableContainer: {
        backgroundColor: '#1d1f27',
        borderRadius: 5,
    },
    leftActions: {
        backgroundColor: '#e83d55',
        flex: 1,
    },
})