import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />;
    </View>
  );
}

const TabNavigator = createBottomTabNavigator(
  {
    'Write A Story': { screen: WriteStory },
    'Read A Story': { screen: ReadStory },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Read A Story') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'Write A Story') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 35, height: 35 }}
            />
          );
        } else if (routeName === 'Home') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 50, height: 50 }}
            />
          );
        }
      },
    }),
  }
);

const switchNavigator = createSwitchNavigator({
  TabNavigator: { screen: TabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
