import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import ScreenOne from '../components/home-dashboard/screen-one';
import ScreenTwo from '../components/home-dashboard/screen-two';
import Splash from '../components/splash/splash';

export const HomeDrawer = createDrawerNavigator({
  ScreenOne: ScreenOne,
  ScreenTwo: ScreenTwo
}, {
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: 260
});

export const RootNavigator = createStackNavigator({
  // Splash: Splash,
  Home: HomeDrawer
},{
  navigationOptions: {
    // header: null
  }
});
