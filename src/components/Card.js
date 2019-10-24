import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const {
    width
} = Dimensions.get('window');

const Card = (props) => {
    const {
        containerStyle,
        containerHeader,
        containerBody,
        title,
        titleStyle,
        description,
        descriptionStyle,
        longPress,
        onPress
    } = props;
    return (
        <TouchableOpacity
            onLongPress={longPress}
            onPress={onPress}
            style={containerStyle}
        >
            <View
                style={containerHeader}
            >
                <Text style={titleStyle}>
                    {title}
                </Text>
            </View>
            <View style={containerBody}>
                <Text style={descriptionStyle}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

Card.propTypes = {
    containerStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    containerHeader: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    containerBody: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    titleStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    descriptionStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    longPress: PropTypes.func
};

Card.defaultProps = {
    containerStyle: {
        width: (width / 1.2),
        elevation: 2,
        borderTopWidth: 0,
        borderRadius: 20,
        marginVertical: 10
    },
    containerHeader: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        width: (width / 1.2),
        backgroundColor: 'blue',
        height: 60,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    containerBody: {
        paddingHorizontal: 20,
        paddingTop: 10
    },
    titleStyle: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descriptionStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
};

export { Card };
