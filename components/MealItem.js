import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = props => {
    

    return (
    <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.data.item.imageUrl}} style={styles.bgImg}/>
                    <Text>
                        {props.data.item.title}
                    </Text>
                </View>
                
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text>{props.data.item.duration}</Text>
                    <Text>{props.data.item.complexity.toUpperCase()}</Text>
                    <Text>{props.data.item.affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
        );

};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImg: {
        width: '100%',
        height: '100%'
    }
});
export default MealItem;
