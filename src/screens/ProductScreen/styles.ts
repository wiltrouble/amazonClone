import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        color: 'black'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    }
})

export default styles;