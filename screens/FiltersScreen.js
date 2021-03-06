import React, { useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
            <Switch
            trackColor={{ true: Colors.accentColor}} 
            thumbColor={Platform.OS === 'android' ? Colors.accentColor : 'white'}
            value={props.value} 
            onValueChange={props.onValueChange}/>
    </View>;
};

const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilter = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        dispatch(setFilters(appliedFilter));
    },[isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    },[saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label='Gluten-Free' value={isGlutenFree} onValueChange={newValue => setIsGlutenFree(newValue)}/>
            <FilterSwitch label='Lactose-Free' value={isLactoseFree} onValueChange={newValue => setIsLactoseFree(newValue)}/>
            <FilterSwitch label='Vegetarian' value={isVegetarian} onValueChange={newValue => setIsVegetarian(newValue)}/> 
            <FilterSwitch label='Vegan' value={isVegan} onValueChange={newValue => setIsVegan(newValue)}/>   
        </View>
    );
};

FiltersScreen.navigationOptions = (navData) => {
    return {
    headerTitle: 'Filter Meals',
    headerLeft: () => {
        return  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={()=>{
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
    },
    headerRight: () => {
        return  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Save' iconName='ios-save' onPress={navData.navigation.getParam('save') }/>
        </HeaderButtons>
    }

};
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15,
        

    }
});


export default FiltersScreen;
