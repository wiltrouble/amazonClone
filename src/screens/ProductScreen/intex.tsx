import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {Picker} from '@react-native-picker/picker';

import styles from "./styles";
import product from "../../data/product";
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {

    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1)

    
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            {/* image carrousel */}

            {/* option selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                {product.options.map(option =>
                        <Picker.Item label={option} value={option}/>
                    )}
                
            </Picker>
            {/* price */}
            <Text style={styles.price}>
                from ${product.price}
                {product.oldPrice && <Text style={styles.oldPrice}> ${product.oldPrice}</Text>}
            </Text>
            
            {/* description */}
            <Text style={styles.description}>
                {product.description}
            </Text>
            {/* quantity selector */}
            <View>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} available={product.amount}/>
                <Text> {product.amount} Available</Text>
            </View>
            {/* buttons */}
            <Button text={"Add to Cart"} onPress={() => console.log("pressed")}></Button>
            <Button text={"Buy Now"} onPress={() => console.log("pressed")}></Button>
        </View>
    )
}

export default ProductScreen
