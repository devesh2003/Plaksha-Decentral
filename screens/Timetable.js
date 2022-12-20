import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import Background from "../components/icons/Background";
import Reset from "../components/icons/Reset";
import GirlSitting from "../components/icons/GirlSitting";
import { Image } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoBlock from "../components/InfoBlock";
import Rasa from "../components/icons/Rasa";
import BookStack from "../components/icons/BookStack";

function Timetable(props) {
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#F37E7E"
          }}>
            {/* <View style={{
                flex: 1,
                top: 0,
                bottom: 0,
                // backgroundColor: "white",
                backgroundColor: "#474C72",
                position: "absolute"
            }}>
                <Background />

            </View> */}

            <View style={{
                position:"absolute",
                top: 110,
                zIndex: 4,
                left: 30
            }}>
                <BookStack />
            </View>

            <View style={{
                position: "absolute",
                top: 90,
                right: 20
            }}>
                <Text style={{
                    fontSize:36,
                    color: "white",
                    fontWeight: "600",
                    letterSpacing: 2,
                    marginTop: 15*4
                }}>
                    Timetable
                </Text>
            </View>

            <View style={{
                // backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                marginTop: 280,
                height: "100%"
            }}>

                <View style={{
                    height: "100%",
                    backgroundColor: "#585B84",
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#585B84",
                        marginTop: 58,
                    }}>
                        <View style={{
                            height: 400,                        
                            backgroundColor: "#777B97",
                            marginHorizontal: 10,
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Image source={require("../assets/timetable.png")} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default Timetable;