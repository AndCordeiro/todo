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
    tasksDoingSelector
} from '../reducers/selectors';
import {
    Card,
    Modal
} from '../components';
import {
    deleteTaskDoing,
    returnTaskToDo,
    addTaskDone
} from '../actions/doing';

class Doing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    _returnTaskToDo = () => {
        this.props.dispatch(returnTaskToDo(this.state));
    }

    _addTaskDone = () => {
        this.props.dispatch(addTaskDone(this.state));
    }

    renderModal = () => {
        return (
            <Modal
                isVisible={this.state.show}
                title='Attention'
                bodyText='What do you want to do with this task?'
                onPressClosed={() => this.setState({ show: false })}
                buttons={[
                    {
                        onPress: () => this.setState({ show: false }, () => this._returnTaskToDo()),
                        text: 'To Do',
                        backgroundColor: 'red'
                    },
                    {
                        onPress: () => this.setState({ show: false }, () => this._addTaskDone()),
                        text: 'Done',
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
                longPress={() => this.props.dispatch(deleteTaskDoing(item.id))}
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
            </View >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: tasksDoingSelector(state)
    }
}

export default connect(mapStateToProps)(Doing);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});