import { createAppContainer, createStackNavigator } from 'react-navigation';
import Index from '~/pages';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Index,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    }
  )
);

export default Routes;
