import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';
import { Contact } from '../screens/Contact';
import { NewContact } from '../screens/NewContact';
import { SeeContact } from '../screens/SeeContact';
import { EditContact } from '../screens/EditContact';

const { Navigator, Screen } = createStackNavigator<RootParamList>()

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='login' component={Login} />
            <Screen name='home' component={Contact} />
            <Screen name='new' component={NewContact} />
            <Screen name='see' component={SeeContact} />
            <Screen name='edit' component={EditContact} />
        </Navigator>
    );
}