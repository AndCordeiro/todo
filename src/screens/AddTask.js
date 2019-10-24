import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Dimensions,
    Text,
    KeyboardAvoidingView
} from 'react-native';
import {
    addTask
} from '../actions/todo';
import {
    connect
} from 'react-redux';
import { StackActions } from 'react-navigation';
import {
    Button
} from '../components';
const {
    width
} = Dimensions.get('window');

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            message: ''
        }
    }

    _addTask = () => {
        this.props.dispatch(addTask(this.state))
            .then(() => this.props.navigation.dispatch(StackActions.pop()))
            .catch((error) => this.setState({ message: error.message }));
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <Text style={styles.alert}>
                    {this.state.message}
                </Text>
                <TextInput
                    ref={(input) => this.titleTextInput = input}
                    onSubmitEditing={() => this.descriptionTextInput.focus()}
                    style={styles.textInputs}
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                    placeholder='Title'
                    placeholderTextColor='blue'
                    autoCapitalize='words'
                    returnKeyType='next'
                />
                <TextInput
                    ref={(input) => this.descriptionTextInput = input}
                    onSubmitEditing={() => this._addTask()}
                    style={[styles.textInputs, { height: 150 }]}
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
                    placeholder='Description'
                    placeholderTextColor='blue'
                    autoCapitalize='words'
                    multiline={true}
                />
                <Button
                    title='Add task'
                    onPress={() => this._addTask()}
                />
            </KeyboardAvoidingView >
        );
    }
}

export default connect()(AddTask);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textInputs: {
        width: (width / 1.2),
        height: 60,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 20,
        borderWidth: 1,
        marginTop: 10,
        borderColor: 'blue',
        color: 'black',
        fontWeight: 'bold'
    },
    alert: {
        color: 'red',
        marginTop: 30,
        width: (width / 1.2),
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});