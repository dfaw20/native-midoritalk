/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ContactsScreen from '../screens/ContactsScreen';
import {RootStackParamList, RootStackScreenProps, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import i18next from "i18next";
import {toText} from "../util/ViewUtil";
import RoomsScreen from "../screens/RoomsScreen";
import ChatScreen from "../screens/ChatScreen";
import RoomMembersScreen from "../screens/RoomMembersScreen";
import {Room} from '../types/Entity';
import HomeScreen from "../screens/HomeScreen";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen
                name="RoomMembers"
                component={RoomMembersScreen}
                options={{
                    title: toText(i18next.t('choice_account')),
                    headerStyle: {
                        backgroundColor: Colors.common.midori,
                    },
                    headerTitleStyle: {
                        color: Colors.common.midoriDark,
                        fontWeight: "bold",
                    },
                }}
            />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={(route: RootStackScreenProps<'Chat'>) => {
                    const room: Room = route.route.params as Room
                    return {
                        title: room.currentAccount === null ? "閲覧モード" : room.currentAccount?.firstName + toText(i18next.t('as_login')),
                        headerStyle: {
                            backgroundColor: Colors.common.midori,
                        },
                        headerTitleStyle: {
                            color: Colors.common.midoriDark,
                            fontWeight: "bold",
                        },
                    }
                }}
            />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="Modal" component={ModalScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarActiveBackgroundColor: Colors.common.tabBackground,
                    tabBarInactiveBackgroundColor: Colors.common.tabBackground,
                    tabBarActiveTintColor: Colors.common.white,
                    tabBarInactiveTintColor: Colors.common.tabIcon,
                    title: toText(i18next.t('site_name')),
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                    headerStyle: {
                        backgroundColor: Colors.common.midori,
                    },
                    headerTitleStyle: {
                        color: Colors.common.midoriDark,
                        fontWeight: "bold",
                    },
                }}
            />
            <BottomTab.Screen
                name="Rooms"
                component={RoomsScreen}
                options={{
                    tabBarLabel: toText(i18next.t('chat')),
                    tabBarActiveBackgroundColor: Colors.common.tabBackground,
                    tabBarInactiveBackgroundColor: Colors.common.tabBackground,
                    tabBarActiveTintColor: Colors.common.white,
                    tabBarInactiveTintColor: Colors.common.tabIcon,
                    title: toText(i18next.t('site_name')),
                    tabBarIcon: ({color}) => <TabBarIcon name="commenting" color={color}/>,
                    headerStyle: {
                        backgroundColor: Colors.common.midori,
                    },
                    headerTitleStyle: {
                        color: Colors.common.midoriDark,
                        fontWeight: "bold",
                    },
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
