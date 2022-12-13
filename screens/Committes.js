import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import Background from "../components/icons/Background";
import Reset from "../components/icons/Reset";
import GirlSitting from "../components/icons/GirlSitting";
import { ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import InfoBlock from "../components/InfoBlock";
import ThreeChildren from "../components/icons/ThreeChildren";

const links = [
    {
        name: "Student Council",
    },
    {
        name: "Mess Committee",
    },
    {
        name: "POSH Committee",
    },
    {
        name: "Anti-Ragging Squad",
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
                    {props.name }
                </Text>

            </View>
        </TouchableOpacity>
    )
}

function Committees(props) {
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
                position:"absolute",
                zIndex: 1,
                top: 168
            }}>
                {/* <Rasa /> */}
                <ThreeChildren />
            </View>

            <View style={{
                position: "absolute",
                right: 50,
                top: 130,
            }}>
                <Text style={{
                    fontSize:36,
                    color: "white",
                }}>
                    Committees
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
                        marginTop: 178,
                    }}>
                        {links.map((link) => {
                            return (
                                <Link name={link.name} />
                            )
                        }) }
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Committees;