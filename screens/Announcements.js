import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import Girl from "../components/icons/Girl";
import Reset from "../components/icons/Reset";
import InfoBlock from "../components/InfoBlock";
import SearchBar from "../components/SearchBar";

function Announcements(props) {

    const navigation = useNavigation()

    return (
        <ScrollView style={{
            flex: 1,
            paddingTop: 40,
            backgroundColor: "#474C72",
        }}>
        <View style={{
            flex: 1,
            paddingTop: 40,
            width: '100%',
            height: '100%',
            alignItems: "center",
            backgroundColor: "#474C72",
        }}>
            <ImageBackground source={require('../assets/announcements.png')}
                style={{
                    flex: 1,
                    width: 1000,
                    height: "100%",
                    zIndex: -1,
                    position: "absolute"
                }} />

            <View style={{
                // backgroundColor: "black",
                width: 100 * 2 * 1.9,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                marginBottom: 20,
                paddingRight: 20
            }}>
                {/* <Image source={require('../assets/Reset.png')} /> */}
                <TouchableOpacity>
                    <Reset />
                </TouchableOpacity>
                <Text style={{
                    color: "white",
                    fontSize: 36,
                    width: 334,
                    textAlign: "right",
                    fontFamily: "Poppins",
                    marginTop: 20,
                    fontWeight: '500',
                    letterSpacing: 1
                }}>
                    Official Announcements
                </Text>
            </View>

            <View style={{
                position: "absolute",
                // backgroundColor: "black",
                alignSelf: "left",
                zIndex: -1,
                width: "100%",
            }}>
                <Girl />
            </View>

            <View style={{
                opacity: 0.8
            }}>
            <SearchBar />
            </View>

            <View style={{
                marginTop: 26,
                // backgroundColor: "black",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <InfoBlock readMore={true}/>
                <InfoBlock readMore={true}/>
                <InfoBlock readMore={true}/>
            </View>
        </View>
        </ScrollView>
    )
}

export default Announcements;