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
    Card
} from '../components';

class Doing extends Component {
    renderItems = ({ item }, index) => {
        return (
            <Card
                key={index}
                title={item.title}
                description={item.description}
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