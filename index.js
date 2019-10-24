import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

if (__DEV__) {
    YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);
    console.disableYellowBox = true;
    /* eslint no-undef: 0 */
    XMLHttpRequest = GLOBAL.originalXMLHttpRequest
        ? GLOBAL.originalXMLHttpRequest
        : GLOBAL.XMLHttpRequest;
}

AppRegistry.registerComponent(appName, () => App);