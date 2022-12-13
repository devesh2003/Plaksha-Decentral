import { View, Text, TouchableOpacity } from "react-native"

function InfoBlockVertical(props) {
    return (
        <TouchableOpacity>
            <View style={{
                height: 224,
                width: 168,
                backgroundColor: "#F3CB7E",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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