import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';
import {
    connect
} from 'react-redux';
import {
    tasksToDoSelector
} from '../reducers/selectors';
import {
    Card,
    Button
} from '../components';
import {
    deleteTask
} from '../actions/todo';

class ToDo extends Component {
    renderItems = ({ item }, index) => {
        return (
            <Card
                key={index}
                title={item.title}
                description={item.description}
                longPress={() => this.props.dispatch(deleteTask(item.id))}
            />
        );
    }

    renderList = () => {
        return (
            <FlatList
                data={this.props.tasks}
                renderItem={this.renderItems}
                keyExtractor={(item) => item.id}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderList()}
                </ScrollView>
                <Button
                    title='+'
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleButtonStyle}
                    onPress={() => this.props.navigation.navigate('addTask')}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: tasksToDoSelector(state)
    }
}

export default connect(mapStateToProps)(ToDo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        right: 0,
        bottom: 0,
        zIndex: 1,
        margin: 40,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    },
    titleButtonStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
});