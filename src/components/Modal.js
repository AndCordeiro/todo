import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import ReactNativeModal from "react-native-modal";
import {
    Button
} from './';

const {
    height,
    width
} = Dimensions.get('window');

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyboardSpace: 0
        };

        //for get keyboard height
        Keyboard.addListener('keyboardDidShow', (frames) => {
            if (!frames.endCoordinates) return;
            this.setState({ keyboardSpace: frames.endCoordinates.height });
        });
        Keyboard.addListener('keyboardDidHide', (frames) => {
            this.setState({ keyboardSpace: 0 });
        });
    }

    render() {
        return (
            <ReactNativeModal
                isVisible={this.props.isVisible}
                onBackdropPress={this.props.onBackdropPress}
                onBackButtonPress={this.props.onBackdropPress}
                avoidKeyboard={Platform.OS === 'ios'}
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{
                    top: this.state.keyboardSpace ? -30 : 0,
                }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={this.props.containerStyle}>

                        {this.props.onPressClosed &&
                            this.renderButtonClose(this.props.onPressClosed)
                        }
                        {this.renderHeader()}
                        {this.renderBody()}
                        {this.renderFooter()}
                    </View>
                </TouchableWithoutFeedback>
            </ReactNativeModal >
        );
    };

    renderButtonClose = (onPressClosed) => {
        return (
            <TouchableOpacity
                onPress={onPressClosed}
                style={styles.buttonClose}
            >
                <Text style={{ color: 'black', fontWeight: 'bold' }}>
                    X
                </Text>
            </TouchableOpacity>
        );
    }

    renderHeader() {
        if (this.props.title || this.props.titleElement) {
            return (
                <View style={styles.containerHeader}>
                    {
                        !this.props.title && this.props.titleElement ? (
                            this.props.titleElement
                        ) : (
                                <Text style={this.props.textTitleStyle}>{this.props.title}</Text>
                            )
                    }
                </View>
            );
        }
    }

    renderBody() {
        if (this.props.bodyText) {
            return (
                <View style={[this.props.containerBody, this.props.bodyStyle]}>
                    <Text style={this.props.textBodyStyle}>
                        {this.props.bodyText}
                    </Text>
                </View>
            );
        }

        if (this.props.body) {
            return (
                <View style={[styles.containerBody, this.props.bodyStyle]}>
                    {this.props.body}
                </View>
            );
        }
    };

    renderFooter() {
        if (this.props.buttons) {
            return (
                <View style={styles.containerFooter}>
                    {this.renderButtons()}
                </View>
            );
        }
    };

    renderButtons() {
        return this.props.buttons.map((button, index) => {
            if (!button.onPress instanceof Function) {
                throw new Exception('onPress button is undefined!');
            } else if (!typeof button.backgroundColor === 'string' || !button.backgroundColor instanceof String) {
                throw new Exception('BackgroundColor button is not defined!');
            } else if (!typeof button.text === 'string' || !button.text instanceof String) {
                throw new Exception('Text button is not defined!');
            }

            return (
                <Button
                    key={index.toString()}
                    title={button.text.toUpperCase()}
                    titleStyle={{
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        fontSize: 14,
                        color: 'white'
                    }}
                    onPress={button.onPress}
                    buttonStyle={{
                        backgroundColor: button.backgroundColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: (width / ((this.props.buttons.length == 1) ? 1.6 : 3)),
                        borderRadius: 40,
                        margin: (this.props.buttons.length == 1) ? 0 : 5
                    }}
                    disabled={button.disabled}
                />
            );
        });
    };
};

Modal.defaultProps = {
    bodyStyle: {
        marginVertical: 2,
        marginHorizontal: 3
    },
    textBodyStyle: {
        margin: 20,
        textAlign: 'center'
    },
    onBackdropPress: () => { },
    containerStyle: {
        backgroundColor: '#fff',
        borderRadius: 40,
        width: (width / 1.3),
        alignItems: 'center',
        alignSelf: 'center'
    },
    textTitleStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
}

Modal.propTypes = {
    title: PropTypes.string,
    titleElement: PropTypes.element,
    buttons: PropTypes.array,
    body: PropTypes.element,
    bodyText: PropTypes.string,
    textTitleStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    onPressClosed: PropTypes.func
};

export { Modal };

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderColor: '#e9e9e9',
        backgroundColor: 'blue',
        width: (width / 1.3),
        borderTopStartRadius: 40,
        borderTopRightRadius: 40
    },
    containerBody: {
        maxHeight: (height * 0.80),
        marginBottom: 20
    },
    containerFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        paddingBottom: 20
    },
    buttonClose: {
        position: 'absolute',
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        right: 0,
        zIndex: 1
    }
});