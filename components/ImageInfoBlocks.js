import { View, Text, Image, TouchableOpacity } from "react-native";

function ImageInfoBlocks(props) {
    return (
        <TouchableOpacity>
            <View style={{
                marginVertical: 20,
                backgroundColor: "#656989",
                // backgroundColor: "#F3CB7E",
                // height: 300,
                width: 349,
                borderRadius: 17,
                // justifyContent: "center",
                opacity: 0.7,
                padding: 10,
                boxShadow: "0px 400px 400px rgba(0, 0, 0, 0.25)",
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
                        padding: 20,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={{
                                flex: 1,
                                color: "white",
                                flexWrap: "flex",
                                fontSize: 16,
                                fontWeight: "500",
                            }}>
                                I have lost my watch , its an apple watch . Last seen in the mess . Do contact me if anyone finds it
                                {"\n"}{"\n"}
                            </Text>
                            <Text style={{
                                flex: 1,
                                color: "white",
                                flexWrap: "flex",
                                fontSize: 16,
                                opacity: 0.5,
                            }}>
                                -Devesh Shah
                            </Text>
                        </View>
                        <View style={{
                            height: 200,
                            // flex: 1,
                            width: 140,
                            borderRadius: 22,
                            backgroundColor: "white",
                            marginLeft: 20,
                        }}>
                            <Image source={require('../assets/Book.png')} />
                        </View>

                    </View>

                </View>

                <View style={{
                    display: "flex",
                    backgroundColor: "black",
                }}>


                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ImageInfoBlocks;