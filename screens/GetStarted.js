import { View, Text, ImageBackground, SafeAreaView, ScrollView } from "react-native"
import Background from "../components/icons/Background";
import GirlSitting from "../components/icons/GirlSitting";

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
                {/* <Text>DEDED</Text> */}
                <GirlSitting/>
                <View style={{
                    height: "50%",
                    width: "95%",
                    backgroundColor: "white",
                    position: "absolute",
                    bottom: 0,
                    borderTopLeftRadius: 21,
                    borderTopRightRadius: 21,
                    opacity: 0.5
                }}>
                </View>
            </View>
        </ScrollView>
    )
}

export default GetStarted;