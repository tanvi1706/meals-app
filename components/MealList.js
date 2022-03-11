import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
        const onSelectMealHandler = (data) => {
                const isFavorite = favoriteMeals.some(meal => meal.id === data.item.id);
                props.navigation.navigate({routeName: 'MealDetail', params: {
                    mealId: data.item.id,
                    mealTitle: data.item.title,
                    isFav: isFavorite
                }});
            };
        
            const renderMealItem = itemData => {
                return (
                    <MealItem data={itemData} onSelectMeal={onSelectMealHandler.bind(this, itemData)}/>
                );
            };
    return <View style={styles.list}>
            <FlatList data={props.data}
             keyExtractor={(item, idx) => item.id} 
             renderItem={renderMealItem}
             style={{width: '100%'}}
             />
        </View>;
};

const styles = StyleSheet.create({
        list: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
});

export default MealList;

