import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';


const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Text>The Meal Details Screen !</Text>
        </View>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mid = navigationData.navigation.getParam('mealId');
    const seltitle = MEALS.find(meal => meal.id === mid);
    return {
        headerTitle: seltitle.title,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Fav' iconName='ios-star-outline' onPress={()=>{
                console.log('Mark as Fav!');
            }}/>
        </HeaderButtons> 
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;
