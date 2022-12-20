import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Background from "../components/icons/Background";
import StretchingGirl from "../components/icons/StretchingGirl";
import SignUpButton from "../components/icons/SignUpButton"
import { useNavigation } from "@react-navigation/native";


function SignUp(props) {

    const navigation = useNavigation();

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#474C72",
        }}>
            <View style={{
                position: "absolute",
            }}>
                <Background />
            </View>

            <View style={{
                marginTop: 90,
                marginLeft: 25
            }}>
                <Text style={{
                    fontSize: 32,
                    color: "white",
                    fontWeight: "600",
                }}>
                    Sign Up to DeClutter
                </Text>
                <Text style={{
                    fontSize: 20,
                    color: "white",
                    fontWeight: "200",
                }}>
                    Enter your details or die!
                </Text>
            </View>

            <View style={{
                position: "absolute",
                top: 170,
                right: 0
            }}>
                <StretchingGirl />
            </View>

            <View style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 208
            }}>
                <TextInput placeholder="Plaksha ID Number" placeholderTextColor={"gray"}
                    style={{
                        backgroundColor: "#363E51",
                        width: 337,
                        height: 75,
                        borderRadius: 16,
                        color: "white",
                        padding: 20,
                        marginBottom: 15
                    }} />
                <TextInput placeholder="Phone number" placeholderTextColor={"gray"}
                    style={{
                        backgroundColor: "#363E51",
                        width: 337,
                        height: 75,
                        borderRadius: 16,
                        color: "white",
                        padding: 20,
                        marginBottom: 15
                    }} />
                <TextInput placeholder="Password" placeholderTextColor={"gray"}
                    style={{
                        backgroundColor: "#363E51",
                        width: 337,
                        height: 75,
                        borderRadius: 16,
                        color: "white",
                        padding: 20,
                        marginBottom: 15 * 3,
                    }} />

                <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                    marginBottom: 40*1
                }}>
                    <SignUpButton />
                </TouchableOpacity>
            </View>



        </ScrollView>
    )
}

export default SignUp;