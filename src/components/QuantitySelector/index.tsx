import React from 'react'
import { View, Text, Pressable } from 'react-native'

import styles from "./styles";

const QuantitySelector = ({quantity, setQuantity, available}) => {
    
    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1));
    }

    const onPlus = () => {
        setQuantity(quantity + 1);
    }

    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                 <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable 
            onPress={onPlus} 
            style={styles.button}
            disabled={available==quantity ? true : false}>
                 <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}

export default QuantitySelector
