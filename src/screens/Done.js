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
    tasksDoneSelector
} from '../reducers/selectors';
import {
    Card
} from '../components';

class Done extends Component {
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
        tasks: tasksDoneSelector(state)
    }
}

export default connect(mapStateToProps)(Done);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});