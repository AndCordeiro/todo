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
    Button,
    Modal
} from '../components';
import {
    deleteTask,
    addTaskDoing
} from '../actions/todo';

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    _addTaskDoing = () => {
        this.props.dispatch(addTaskDoing(this.state));
    }

    renderModal = () => {
        return (
            <Modal
                isVisible={this.state.show}
                title='Attention'
                bodyText='Do you want to start this task?'
                onPressClosed={() => this.setState({ show: false })}
                buttons={[
                    {
                        onPress: () => this.setState({ show: false }),
                        text: 'No',
                        backgroundColor: 'red'
                    },
                    {
                        onPress: () => this.setState({ show: false }, () => this._addTaskDoing()),
                        text: 'Yes',
                        backgroundColor: 'blue'
                    }
                ]}
            />
        );
    }

    renderItems = ({ item }, index) => {
        return (
            <Card
                key={index}
                title={item.title}
                description={item.description}
                longPress={() => this.props.dispatch(deleteTask(item.id))}
                onPress={() => this.setState({ show: true, item })}
            />
        );
    }

    renderList = () => {
        return (
            <FlatList
                data={this.props.tasks}
                renderItem={this.renderItems}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderModal()}
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