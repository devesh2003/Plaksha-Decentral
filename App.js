import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import Reset from './components/icons/Reset';
import InfoBlock from './components/InfoBlock';
import InfoBlockVertical from './components/InfoBlockVertical';
import AnnoucementDetails from './screens/AnnouncementDetails';
import Announcements from './screens/Announcements';
import Committes from './screens/Committes';
import Found from './screens/Found';
import GetStarted from './screens/GetStarted';
import GoingOut from './screens/GoingOut';
import Home from './screens/Home';
import ImportantContacts from './screens/ImportantContacts';
import InfoDetails from './screens/InfoDetails';
import Lost from './screens/Lost';
import Mess from './screens/Mess';
import SignUp from './screens/SignUp';
// import OPEN from './screens/OPEN';
import StudentAnnouncements from './screens/StudentAnnouncements';
import Timetable from './screens/Timetable';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#474C72"
    }}>
      {/* <ScrollView horizontal={false}> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{ headerShown: false }}>
            
              {/* <View style={{
          position: "absolute",
          top: 10,
          left: 20,
          zIndex: 20
        }}>
          <Reset />

        </View> */}
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Timetable" component={Timetable} />
              <Stack.Screen name="Announcements" component={Announcements} />
              <Stack.Screen name="Committes" component={Committes} />
              <Stack.Screen name="Contacts" component={ImportantContacts} />
              <Stack.Screen name="RASA Drive" component={InfoDetails} />
              <Stack.Screen name="Mess" component={Mess} />
              <Stack.Screen name="Lost" component={Lost} />
              <Stack.Screen name="Found" component={Found} />
              <Stack.Screen name="Going Out?" component={GoingOut} />
              <Stack.Screen name="AnnouncementDetails" component={AnnoucementDetails} />
              {/* <Announcements /> */}
              {/* <GetStarted /> */}
              {/* <StudentAnnouncements /> */}
              {/* <InfoDetails /> */}
              {/* <Home /> */}
              {/* <OPEN /> */}
              {/* <Committes /> */}
              {/* <ImportantContacts /> */}
              {/* <Mess /> */}
              {/* <GoingOut /> */}
              {/* <Timetable /> */}
              {/* <SignUp /> */}
              {/* <Lost /> */}
              {/* <Found /> */}
              {/* <AnnoucementDetails /> */}
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      {/* </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#474C72",
  },
});
