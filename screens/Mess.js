import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Linking } from "react-native";
import Background from "../components/icons/Background";
import Reset from "../components/icons/Reset";
import GirlSitting from "../components/icons/GirlSitting";
import { ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoBlock from "../components/InfoBlock";
import Rasa from "../components/icons/Rasa";
import MessBoy from "../components/icons/MessBoy";
import InfoBlockVertical from "../components/InfoBlockVertical";

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
        <TouchableOpacity onPress={() => {
            Linking.openURL("tel:9991151095")
        }}>
            <View 
            style={{
                backgroundColor: "#637FA4",
                height: 80,
                alignItems: "left",
                justifyContent: "center",
                paddingLeft: 20,
                marginVertical: 12
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

function Mess(props) {
    return (
        <ScrollView style={{
            width: "100%",
            backgroundColor: "#F8C870",
            paddingTop: 60,
        }}>
            <View style={{
                flex: 1,
                top: 0,
                bottom: 0,
                // backgroundColor: "white",
                position: "absolute"
            }}>
                {/* <Background /> */}

            </View>

            <View style={{
                position: "absolute",
                zIndex: 1,
            }}>
                <MessBoy />
            </View>

            <View style={{
                position: "absolute",
                right: 50,
                top: 35,
            }}>
                <Text style={{
                    fontSize: 36,
                    color: "white",
                    letterSpacing: 1,
                    textAlign: "right",
                }}>
                    Mess
                </Text>
            </View>

            <View style={{
                // backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                marginTop: 200,
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
                        marginTop: 100,
                        justifyContent: "space-evenly",
                        marginBottom: 10*2
                    }}>
                        <InfoBlockVertical name={"Menu"} />
                        <InfoBlockVertical name={"Feedback"} link={"https://forms.office.com/pages/responsepage.aspx?id=M4x5RUMbAUy_PtjWVdM4nAVSD91UgndOhPDvMD8uV1hUNE5XRlRXR1Y1T01TOUpJQzBIWUVWM0VTTS4u"}/>
                    </View>
                    
                    <Link name={"Contact Mess Committee Head"} />
                    <Link name={"Book Combo Meal"} />
                </View>
            </View>
        </ScrollView>

    )
}

export default Mess;