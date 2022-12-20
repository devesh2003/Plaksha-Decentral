import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Linking } from "react-native"

function InfoBlockVertical(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={ () => {
            props.nav ? navigation.navigate(props.nav) : null
            props.link ? Linking.openURL(props.link) : null
        } }>
            <View style={{
                height: 224,
                width: 168,
                backgroundColor: "#637FA4",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                margin: 5,
            }}>
                <Text style={{
                    color: "white",
                    fontSize: 24,
                    fontFamily: "Poppins_600SemiBold",
                    fontWeight: "600",
                    letterSpacing: 1,
                    textAlign: "center",
                }}>
                    {/* FEEDBACK */}
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default InfoBlockVertical