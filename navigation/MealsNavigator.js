import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
    {
    Categories: { 
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: { 
        screen: CategoryMeals,
        // navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: '',
        //     },
        //     // headerTintColor: 'white'
        //     headerTitleStyle: {
        //         color: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        //     }
        // }
    },
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: '',
        },
        // headerTintColor: 'white'
        headerTitleStyle: {
            color: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
}
);

export default createAppContainer(MealsNavigator);