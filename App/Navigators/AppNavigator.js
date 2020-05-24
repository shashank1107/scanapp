import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import CameraScreen from 'App/Containers/CameraScreen/CameraScreen'
import Constants from 'App/Constants/Constants'
import styles from 'App/Navigators/NavigationStyles'
import Color from 'App/Theme/Colors'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const PrimaryNav = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: { screen: SplashScreen, navigationOptions: { header: null } },
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    // MainScreen: ExampleScreen,
    CameraScreen: { screen: CameraScreen, navigationOptions: { title: 'Click an image' } },
  },
  {
    // By default the application will show the splash screen
    initialRouteName: Constants.INITIAL_ROUTE_NAME,
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitle,
      headerTintColor: Color.toolbarText,
      headerBackTitle: null,
    },
  },
)

export default createAppContainer(PrimaryNav)
