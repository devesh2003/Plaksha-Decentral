import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import Background from "../components/icons/Background";
import Reset from "../components/icons/Reset";
import GirlSitting from "../components/icons/GirlSitting";
import { ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoBlock from "../components/InfoBlock";
import Rasa from "../components/icons/Rasa";
import MessBoy from "../components/icons/MessBoy";
import InfoBlockVertical from "../components/InfoBlockVertical";
import GirlOut from "../components/icons/GirlOut";
import PlacesButton from "../components/icons/PlacesButton";
import Map from "../components/icons/Map";
import Location from "../components/icons/Location";

const links = [
    {
        name: "TAs",
    },
    {
        name: "Maintainance Cell",
    },
    {
        name: "House Keeping",
    },
    {
        name: "Admin Team",
    },
]

function Link(props) {
    return (
        <TouchableOpacity>
            <View style={{
                backgroundColor: "#637FA4",
                height: 80,
                alignItems: "left",
                justifyContent: "center",
                paddingLeft: 20,
                marginVertical: 20
            }}>

                <Text style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "600",
                }}>
                    {props.name}
                </Text>

            </View>
        </TouchableOpacity>
    )
}

function GoingOut(props) {
    return (
        <View style={{
            width: "100%",
        }}>
            <View style={{
                flex: 1,
                top: 0,
                bottom: 0,
                // backgroundColor: "white",
                position: "absolute"
            }}>
                <Background />

            </View>

            <View style={{
                position: "absolute",
                zIndex: 1,
                top: 20
            }}>
                <GirlOut />
            </View>

            <View style={{
                position: "absolute",
                right: 30,
                top: 56,
            }}>
                <Text style={{
                    fontSize: 36,
                    color: "white",
                    letterSpacing: 1,
                    textAlign: "right",
                }}>
                    Tussi Jaa {"\n"}
                    Rahe Ho?
                </Text>
            </View>

            <View style={{
                // backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                marginTop: 380,
                height: "100%"
            }}>
                {/* <View style={{
                    alignSelf: "center",
                    marginBottom: 33
                }}>
                    <SearchBar />
                </View> */}

                <View style={{
                    height: "100%",
                    backgroundColor: "#585B84",
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "#585B84",
                        marginTop: 80,
                        justifyContent: "space-evenly",
                        marginBottom: 53
                    }}>
                        <InfoBlockVertical name={"Night Outpass"} />
                        <InfoBlockVertical name={"Shuttle"} />
                    </View>

                    <TouchableOpacity>
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <PlacesButton />
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 38
                    }}>
                        <Map />
                    </View>

                    <View style={{
                        position: "absolute",
                        bottom: 0,
                    }}> 
                        <Location />
                    </View>
                </View>
            </View>
        </View>

    )
}

export default GoingOut;