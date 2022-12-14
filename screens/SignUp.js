import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Background from "../components/icons/Background";
import StretchingGirl from "../components/icons/StretchingGirl";
import SignUpButton from "../components/icons/SignUpButton"


function SignUp(props) {
    return (
        <View style={{
            flex: 1
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
                top: 195,
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

                <TouchableOpacity>
                    <SignUpButton />
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default SignUp;