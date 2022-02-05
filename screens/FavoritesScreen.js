import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return <MealList data={favMeals} navigation={props.navigation}/>;
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Your Favorites',
    headerLeft: () => {
        return  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={()=>{
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    }
};
};


export default FavoritesScreen;
