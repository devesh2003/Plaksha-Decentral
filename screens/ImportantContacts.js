import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Linking } from "react-native";
import Background from "../components/icons/Background";
import Reset from "../components/icons/Reset";
import GirlSitting from "../components/icons/GirlSitting";
import { ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoBlock from "../components/InfoBlock";
import Rasa from "../components/icons/Rasa";
import Phone from "../components/icons/Phone";

const links = [
    {
        name: "Healthcare",
        url: "tel:9875990801"
    },
    {
        name: "Maintainance Cell",
        url: "tel:83605891989"
    },
    {
        name: "House Keeping",
        url: ""
    },
    {
        name: "Admin Team",
        url: ""
    },
]

function Link(props) {
    return (
        <TouchableOpacity onPress={() => {
            props.link ? Linking.openURL(props.link) : null
        }}>
            <View style={{
                backgroundColor: "#637FA4",
                height: 80,
                alignItems: "left",
                justifyContent: "center",
                paddingLeft: 20,
                marginVertical: 15
            }}>

                <Text style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "600",
                }}>
                    {props.name }
                </Text>

            </View>
        </TouchableOpacity>
    )
}

function ImportantContacts(props) {
    return (
        <ScrollView style={{
            width: "100%",
            backgroundColor: "#7EDAF3",
            paddingTop: 20*3
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
                position:"absolute",
                zIndex: 1,
                left: 10
            }}>
                {/* <Rasa /> */}
                {/* <ThreeChildren /> */}
                <Phone />
            </View>

            <View style={{
                position: "absolute",
                right: 50,
                top: 56,
            }}>
                <Text style={{
                    fontSize:36,
                    color: "white",
                    letterSpacing: 2,
                    textAlign: "right",
                }}>
                    Important {"\n"}  
                    Contacts
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
                        flexDirection: "column",
                        backgroundColor: "#585B84",
                        marginTop: 90,
                    }}>
                        {links.map((link) => {
                            return (
                                <Link name={link.name} link={link.url} />
                            )
                        }) }
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default ImportantContacts;