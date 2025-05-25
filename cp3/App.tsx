import { NavigationContainer } from "@react-navigation/native";
import HomeTab from "@/Navigation/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostDetail from "@/Screens/PostDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PostDetail" component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}