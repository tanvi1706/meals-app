import React from 'react';

import { View, Text, StyleSheet, FlatList} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';


const CategoryMealScreen = props => {

    const onSeelctMealHandler = (data) => {
        props.navigation.navigate({routeName: 'MealDetail', params: {
            mealId: data.item.id
        }});
    };

    const renderMealItem = itemData => {
        return (
            <MealItem data={itemData} onSelectMeal={onSeelctMealHandler.bind(this, itemData)}/>
        );
    };

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(item => item.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals}
             keyExtractor={(item, idx) => item.id} 
             renderItem={renderMealItem}
             style={{width: '100%'}}
             />
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
