import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Linking } from "react-native";
import Background from "../components/icons/Background";
import Reset from "../components/icons/Reset";
import GirlSitting from "../components/icons/GirlSitting";
import { ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoBlock from "../components/InfoBlock";
import ThreeChildren from "../components/icons/ThreeChildren";

const links = [
    {
        name: "Academic Office",
        url: "https://plakshauniversity1.sharepoint.com/sites/academic-affairs/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Facademic%2Daffairs%2FShared%20Documents%2FUG%20Program%20Academic%20Policy%202021%2D22%5FVersion%202%2Epdf&parent=%2Fsites%2Facademic%2Daffairs%2FShared%20Documents&p=true&ct=1667283501260&or=OWA%2DNT&cid=8aedfef0%2D2a51%2Dd0f6%2Dd3b7%2D7f445f92c844&ga=1 "
    },
    {
        name: "Mess Committee",
        url: ""
    },
    {
        name: "POSH Committee",
        url: ""
    },
    {
        name: "Anti-Ragging Squad",
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
                marginVertical: 20
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

function Committees(props) {
    return (
        <ScrollView style={{
            width: "100%",
            backgroundColor: "#789788",
        }}>

            <View style={{
                position:"absolute",
                zIndex: 1,
                top: 128,
                left: 10
            }}>
                {/* <Rasa /> */}
                <ThreeChildren />
            </View>

            <View style={{
                position: "absolute",
                right: 50,
                top: 100,
            }}>
                <Text style={{
                    fontSize:36,
                    color: "white",
                    textAlign: "right"
                }}>
                    Committee {"\n"}
                    Policies
                </Text>
            </View>

            <View style={{
                // backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                marginTop: 276,
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
                        marginTop: 138,
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

export default Committees;