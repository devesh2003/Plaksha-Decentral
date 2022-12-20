import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Background from "../components/icons/Background";
import Notifs from "../components/icons/Notifs";
import Reset from "../components/icons/Reset";
import InfoBlockVertical from "../components/InfoBlockVertical";
import Book from "../components/icons/Book";
import CatBookShelf from "../components/icons/CatBookShelf";
import BookFloating from "../components/icons/BookFloating"
import { useNavigation } from "@react-navigation/native";

const DataGrid = () => {
    return (
        <View style={{
            flex: 4
        }}>


        </View>
    )
}

const HomeLinks = [
    "Timetable",
    "Going Out?",
    "Committes",
    "Contacts",
    "RASA Drive",
    "Mess",
    "Lost",
    "Found"
]

const Announcements = () => {
    return (
        <View style={{
            backgroundColor: "#637FA4",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            height: 80,
            marginTop: 57,
            alignContent: "center",
            alignItems: "center",
            paddingHorizontal: 30
        }}>
            <Text style={{
                color: "white",
                fontSize: 24,
                textAlign: "left"
            }}>
                Announcements
            </Text>
            <View style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Notifs />
                <Reset />
            </View>
        </View>
    )
}

function Home(props) {
    const navigation = useNavigation()

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#474C72",
          }}>
            <View style={{
                position: "absolute"
            }}>
                {/* <Background /> */}
            </View>

            <View style={{
                position: "absolute",
                right: -2,
                top: 175
            }}>
                <Book />
            </View>

            <View style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 85,
                marginLeft: 35
            }}>
                <Text style={{
                    color: "white",
                    fontSize: 32,
                    textAlign: "left"
                }}>
                    Hey Devesh!
                </Text>
                <Text style={{
                    color: "white",
                    fontSize: 28,
                    fontWeight: "200"
                }}>
                    What's happening {"\n"}
                    around you?
                </Text>
            </View>

            <TouchableOpacity style={{
                marginTop: 20
            }} onPress={ () => {
                navigation.navigate("Announcements")
            } }>
                <Announcements />
            </TouchableOpacity>

            <ScrollView horizontal style={{
                marginTop: 54
            }} persistentScrollbar={true}
                endFillColor="white"
                overScrollMode="never"
            >
                <View  style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}>
                {
                    HomeLinks.map((link, index) => {
                        return (
                            <InfoBlockVertical name={link} key={index} nav={link} />
                            // </TouchableOpacity>
                        )
                    })
                }
                </View>
            </ScrollView>

            {/* <View style={{
                display: "flex",
                marginTop: 124,
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}>
                <InfoBlockVertical name={"Timetable"} />
                <InfoBlockVertical name={"Going Out?"} />
            </View>

            <View style={{
                display: "flex",
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}>
                <InfoBlockVertical name={"Committee"} />
                <InfoBlockVertical name={"RASA Drive"} />
            </View>

            <View style={{
                display: "flex",
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: 450
            }}>
                <InfoBlockVertical name={"Contacts"} />
                <InfoBlockVertical name={"Mess"} />
            </View> */}

            <View style={{
                position: "absolute",
                bottom: -40*5,
                left: 0,
                zIndex: -1
            }}>
                {/* <BookFloating /> */}
                {/* <CatBookShelf /> */}
            </View>

            <View style={{
                position: "absolute",
                bottom: 0,
                left: -30,
                zIndex: -1
            }}>
                {/* <BookFloating /> */}
            </View>

        </ScrollView>
    )
}

export default Home;