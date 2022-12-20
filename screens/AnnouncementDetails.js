import { View, Text, Image, ScrollView } from "react-native";
import Background from "../components/icons/Background";
import Reset from "../components/icons/Reset";
import ThumbsUp from "../components/icons/ThumbsUp";
import ThumbsDown from "../components/icons/ThumbsDown";

function AnnoucementDetails(tmp) {
    const {test} = tmp.route.params;
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#474C72",
            paddingTop: 40
        }}>
            <View style={{
                position: "absolute",
            }}>
                <Background />
            </View>

            <View style={{
                position: "absolute",
                top: 27,
                right: 40
            }}>
                <Reset />
            </View>

            <View style={{
                marginTop: 100,
                marginRight: 40
            }}>
                <Text style={{
                    textAlign: "right",
                    fontSize: 36,
                    color: "white",
                    fontWeight: "600",
                    letterSpacing: 1
                }}>
                    Founder Meet
                </Text>
            </View>

            <View style={{
                // height: 615,
                width: 350,
                backgroundColor: "#656989",
                alignSelf: "center",
                marginTop: 32,
                borderRadius: 17,
                opacity: 0.7,
                paddingBottom: 2,
                position: "relative"
            }}>
                <View style={{
                    display: "flex"
                }}>
                    <View style={{
                        padding: 20,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <Text style={{
                            color: "white"
                        }}>20/11/2022</Text>
                        <Text style={{
                            color: "white"
                        }}>4:20 pm</Text>

                    </View>

                    <View style={{
                        padding: 20
                    }}>
                        <Text style={{
                            fontSize: 25,
                            color: "white",
                        }}>

                            Manas Fuloria and his wife Nidhi are visiting campus and are interested in interacting with students over lunch.
                            {"\n"}{"\n"}
                            Details:
                            Date: 30th October, 2022
                            Venue: Mess
                            Time: 1pm
                            {"\n"}{"\n"}
                            Interested students please react to this message to sign up for an estimate. 
                            {"\n"}{"\n"}
                            {/* {test} */}
                        </Text>
                    </View>

                    {/* <View style={{
                        position: "absolute",
                        bottom: -40,
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <ThumbsUp />
                        <ThumbsDown />
                    </View> */}



                </View>


            </View>

        </ScrollView>
    )
}

export default AnnoucementDetails;