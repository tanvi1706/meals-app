import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>;
}

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                    <DefaultText>{selectedMeal.duration}m</DefaultText>
                    <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}

            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}

        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mid = navigationData.navigation.getParam('mealId');
    const seltitle = MEALS.find(meal => meal.id === mid);
    return {
        headerTitle: seltitle.title,
        headerRight: () => { return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Fav' iconName='ios-star-outline' onPress={()=>{
                console.log('Mark as Fav!');
            }}/>
        </HeaderButtons>;  }
    };
};

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#CCC',
        borderWidth: 1,
        padding: 10
    }

});

export default MealDetailsScreen;
