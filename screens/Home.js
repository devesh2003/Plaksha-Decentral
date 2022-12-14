import { View, Text, TouchableOpacity } from "react-native";
import Background from "../components/icons/Background";
import Notifs from "../components/icons/Notifs";
import Reset from "../components/icons/Reset";
import InfoBlockVertical from "../components/InfoBlockVertical";
import Book from "../components/icons/Book";
import CatBookShelf from "../components/icons/CatBookShelf";
import BookFloating from "../components/icons/BookFloating"

const DataGrid = () => {
    return (
        <View style={{
            flex: 4
        }}>


        </View>
    )
}

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
    return (
        <View>
            <View style={{
                position: "absolute"
            }}>
                <Background />
            </View>

            <View style={{
                position: "absolute",
                right: -2,
                top: 200
            }}>
                <Book />
            </View>

            <View style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 75,
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
                marginTop: 40
            }}>
                <Announcements />
            </TouchableOpacity>

            <View style={{
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
            </View>

            <View style={{
                position: "absolute",
                bottom: 200,
                right: 0,
                zIndex: -1
            }}>
                <CatBookShelf />
            </View>

            <View style={{
                position: "absolute",
                bottom: 0,
                left: -30,
                zIndex: -1
            }}>
                <BookFloating />
            </View>

        </View>
    )
}

export default Home;