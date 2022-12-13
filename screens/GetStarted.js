import { View, Text, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { LinearGradient } from "react-native-svg";
import Background from "../components/icons/Background";
import GirlSitting from "../components/icons/GirlSitting";
import GetStartedButton from "../components/icons/GetStartedButton";

function GetStarted(props) {
    return (
        <ScrollView>
            <View style={{
                height: "100%",
                width: "100%",
            }}>
                <Background />
            </View>

            <View style={{
                position: "absolute",
                // backgroundColor: "white",
                height: "100%"
            }}>
                <GirlSitting/>
                <View style={{
                    height: "50%",
                    width: "95%",
                    backgroundColor: "#585B84",
                    position: "absolute",
                    bottom: 0,
                    borderTopLeftRadius: 21,
                    borderTopRightRadius: 21,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    paddingLeft: 40,
                    paddingTop: 30
                }}>
                    <Text style={{
                        fontFamily: "Poppins",
                        fontSize: "32px",
                        color: "#ffffff",
                        fontStyle: "medium",
                        paddingBottom: 8,
                        letterSpacing: 1.5,
                        fontWeight: "500"
                    }}>
                        Welcome to {"\n"} 
                        Plaksha Decentral
                    </Text>
                    <Text style={{
                        fontFamily: "Poppins",
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: "200",
                        letterSpacing: 1.5,
                    }}>
                        Your One Stop to all things {"\n"}  
                        communication.
                    </Text>

                    <View style={{
                        position: "relative",
                        paddingRight: 200
                    }}>
                    <TouchableOpacity style={{
                        // backgroundColor: "black"
                        paddingTop: 51,
                        position: "absolute",
                        paddingRight: 100
                    }}>
                        <GetStartedButton />
                    </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default GetStarted;