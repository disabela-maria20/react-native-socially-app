import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../../../pages/Feed';
import Profile from '../../../pages/Profile';
import { TouchableOpacity } from 'react-native';
import { AddPhoto } from './styles';
import { useNavigation } from '@react-navigation/native';
import Chat from '../../../pages/Chat';
import Like from '../../../pages/Like';
import Icon from 'react-native-vector-icons/Octicons';
const Tab = createBottomTabNavigator();

export function NavigatorTab() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarStyle: {
          height: 84,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 15,
          borderRadius: 20,
          backgroundColor: "#fff",
        },

      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              color={focused ? '#7DB9B3' : '#0f0f0f'}
              size={24} />
          ),
        }}
        name="Home"
        component={Feed}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="comment"
              color={focused ? '#7DB9B3' : '#0f0f0f'}
              size={24} />
          ),
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AddPhoto', { screen: 'AddPhoto' })}>
              <AddPhoto source={require('../../../src/assets/image/btn-photo.png')} />
            </TouchableOpacity>
          ),
        }}
        name="AddPhoto"
        component={Profile}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'heart-fill' : 'heart'}
              color={focused ? '#7DB9B3' : '#0f0f0f'}
              size={24} />
          ),
        }}
        name="Like"
        component={Like}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"person"}
              color={focused ? '#7DB9B3' : '#0f0f0f'}
              size={24} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}