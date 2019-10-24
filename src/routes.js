import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {
    View
} from 'react-native';

import ToDoScreen from './screens/ToDo';
import DoingScreen from './screens/Doing';
import DoneScreen from './screens/Done';
import AddTaskScreen from './screens/AddTask';

const headerDefault = (title, headerTintColor, backgroundColor) => ({
    title,
    headerTintColor: (headerTintColor) ? headerTintColor : '#ffffff',
    headerStyle: {
        backgroundColor: (backgroundColor) ? backgroundColor : global.COLOR_MAIN
    }
});

const TabBottonStack = createBottomTabNavigator({
    toDoStack: {
        screen: ToDoScreen,
        navigationOptions: () => (headerDefault('To do'))
    },
    doingStack: {
        screen: DoingScreen,
        navigationOptions: () => (headerDefault('Doing'))
    },
    doneStack: {
        screen: DoneScreen,
        navigationOptions: () => (headerDefault('Done'))
    }
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'red',
        labelStyle: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 'bold'
        },
        tabStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        showIcon: false
    }
});

const AppStack = createStackNavigator({
    home: {
        screen: TabBottonStack,
        navigationOptions: () => (headerDefault('To Do', '#fff', 'blue'))
    },
    addTask: {
        screen: AddTaskScreen,
        navigationOptions: () => (headerDefault('Add Task', '#fff', 'blue'))
    }
});

const Routes = createSwitchNavigator({
    App: AppStack
});

const AppContainer = createAppContainer(Routes);

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppContainer />
        </View>
    );
}

export default App;