import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)
    //const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    if(favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}>
            <DefaultText>No favorite meals found. Start adding some!</DefaultText>
        </View>
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default FavoritesScreen;
