import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const reactotron = Reactotron.configure() // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  reactotron.clear();
  console.tron = reactotron;
}
