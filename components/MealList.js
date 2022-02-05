import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = props => {
        const onSelectMealHandler = (data) => {
                props.navigation.navigate({routeName: 'MealDetail', params: {
                    mealId: data.item.id
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

