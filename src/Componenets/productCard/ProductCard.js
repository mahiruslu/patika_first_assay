import React from 'react'
import { View, Text,Image,TouchableOpacity,useWindowDimensions } from 'react-native'
import Styles from './ProductCard.style'

const ProductCard = (props) => {
    return (
        <View style={Styles.container}>
            <Image style={Styles.Image} source={{uri: props.item.imgURL}}/>
            <View style={Styles.inner_container}>
                <Text style={Styles.productTitle}>{props.item.title}</Text>
                <Text style={Styles.productPrice}>{props.item.price}</Text>
            </View>
        </View>
    )
}

export default ProductCard
