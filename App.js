import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import InfoBlock from './components/InfoBlock';
import InfoBlockVertical from './components/InfoBlockVertical';
import Announcements from './screens/Announcements';
import Committes from './screens/Committes';
import GetStarted from './screens/GetStarted';
import GoingOut from './screens/GoingOut';
import Home from './screens/Home';
import ImportantContacts from './screens/ImportantContacts';
import InfoDetails from './screens/InfoDetails';
import LostAndFound from './screens/LostAndFound';
import Mess from './screens/Mess';
import SignUp from './screens/SignUp';
// import OPEN from './screens/OPEN';
import StudentAnnouncements from './screens/StudentAnnouncements';
import Timetable from './screens/Timetable';

export default function App() {
  return (
    <SafeAreaView  style={{
      flex: 1,
      backgroundColor: "#474C72",
    }}>
      <ScrollView horizontal={false}>
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
        <LostAndFound />
      </ScrollView>
    </SafeAreaView>
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
