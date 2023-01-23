import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Forum from '../../screens/dashboard/forum/index';
import ForumQuestion from '../../screens/dashboard/forum/forumQuestion/forumQuestion';
import ForumResponse from '../../screens/dashboard/forum/forumResponse/forumResponse';
import ForumDetails from '../../screens/dashboard/forum/forumDetails/forumDetails';

const DashboardStack = createNativeStackNavigator();

const DashboardStackNavigator = ({navigation}) => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Question"
        component={ForumQuestion}
        options={{headerShown: false}}
      />
      <DashboardStack.Screen
        name="Response"
        component={ForumResponse}
        options={{headerShown: false}}
      />
      <DashboardStack.Screen
        name="Detail"
        component={ForumDetails}
        options={{headerShown: false}}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackNavigator;
