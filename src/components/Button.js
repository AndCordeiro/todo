import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const {
    width
} = Dimensions.get('window');

class Button extends Component {
    render() {
        const {
            onPress,
            buttonStyle,
            titleStyle,
            title,
            disabled
        } = this.props;

        return (
            <TouchableOpacity
                onPress={onPress}
                style={buttonStyle}
                disabled={disabled}
            >
                <Text style={titleStyle}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    buttonStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    title: PropTypes.string.isRequired,
    titleStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    buttonStyle: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: (width / 1.2),
        borderRadius: 50,
        marginTop: 10
    },
    titleStyle: {
        alignSelf: 'center',
        fontSize: 14,
        color: 'white'
    },
    disabled: false
};

export { Button };