import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import Announcements from './screens/Announcements';
import GetStarted from './screens/GetStarted';
import InfoDetails from './screens/InfoDetails';
import StudentAnnouncements from './screens/StudentAnnouncements';

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
        <InfoDetails />
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
