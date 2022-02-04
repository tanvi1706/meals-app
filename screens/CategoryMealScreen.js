import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';


const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(item => item.id === catId);
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="receipe" onPress={ () => {
                props.navigation.navigate('MealDetail');
            }}/>
        </View>
    );
};
CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCat.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;
