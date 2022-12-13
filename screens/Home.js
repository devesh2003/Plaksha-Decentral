import { View, Text, TouchableOpacity } from "react-native";
import Background from "../components/icons/Background";
import Notifs from "../components/icons/Notifs";
import Reset from "../components/icons/Reset";

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

            <TouchableOpacity>
                <Announcements />
            </TouchableOpacity>


        </View>
    )
}

export default Home;