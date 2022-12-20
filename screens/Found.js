import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import Children from "../components/icons/Children";
import Girl from "../components/icons/Girl";
import Reset from "../components/icons/Reset";
import InfoBlock from "../components/InfoBlock";
import SearchBar from "../components/SearchBar";
import SadCat from "../components/icons/SadCat";
import ImageInfoBlocks from "../components/ImageInfoBlocks";

function Found(props) {
    return (
        <ScrollView style={{
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
                        Found
                    </Text>
                </View>

                <View style={{
                    position: "absolute",
                    // backgroundColor: "black",
                    alignSelf: "left",
                    zIndex: -10,
                    width: "100%",
                    opacity: 0.8,
                    left: 20
                }}>
                    {/* <Girl /> */}
                    {/* <Children /> */}
                    <SadCat />
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
                    <ImageInfoBlocks />
                    <ImageInfoBlocks />
                    <ImageInfoBlocks />
                </View>
            </View>
        </ScrollView>
    )
}

export default Found;